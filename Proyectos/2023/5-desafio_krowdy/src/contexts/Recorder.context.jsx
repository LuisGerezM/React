import { ApiDataMocked } from "@/ApiDataMocked/ApiDataMocked";
import { createContext, useState } from "react";

export const QuestionRecorderContext = createContext();

export const QuestionRecorderProvider = ({ children }) => {
  const [questions, setQuestions] = useState(
    ApiDataMocked.map(question => ({
      ...question,
      hasVideoRecord: { status: false, video: null }
    }))
  );

  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

  const handleAllQuestionAnswered = value => setAllQuestionsAnswered(value);

  const handleAddAnswerToQuestion = (id, videoUrl) => {
    const videoRecordStatus = !!videoUrl || false;
    const isVideoUrlExist = videoUrl || null;

    const updateQuestions = questions.map(question =>
      question.id === id
        ? {
            ...question,
            hasVideoRecord: {
              status: videoRecordStatus,
              video: isVideoUrlExist
            }
          }
        : { ...question }
    );
    setQuestions(updateQuestions);
  };

  return (
    <QuestionRecorderContext.Provider
      value={{
        handleAddAnswerToQuestion,
        handleAllQuestionAnswered,
        allQuestionsAnswered,
        questions
      }}
    >
      {children}
    </QuestionRecorderContext.Provider>
  );
};
