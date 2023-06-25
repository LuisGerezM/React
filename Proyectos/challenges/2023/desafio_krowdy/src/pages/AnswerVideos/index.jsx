import { useContext } from "react";
import { routes } from "@/models/routes.models";

import { LinkReactRouter } from "@/components/LinkReactRouter";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import AnswerSection from "./components/AnswerSection/AnswerSection";
import useIndexManager from "./hooks/useIndexManager";

import { WrapAnswerVideos } from "./styles";

const AnswerVideos = () => {
  const { questions, handleAllQuestionAnswered } = useContext(
    QuestionRecorderContext
  );

  const { handlePrevious, handleNext, currentIndex } = useIndexManager({
    questions,
    handleAllQuestionAnswered
  });

  return (
    <WrapAnswerVideos className='answerVideos'>
      <header className='answerVideos-header'>
        <LinkReactRouter
          linkClass='answerVideos-header-linkRR'
          to={routes.HOME}
          text='Volver a Lista'
          borderRadius='8px'
        />
      </header>

      <AnswerSection
        question={questions[currentIndex]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentIndex={currentIndex}
      />
    </WrapAnswerVideos>
  );
};
export default AnswerVideos;
