import { useState } from "react";

const useIndexManager = ({ questions, handleAllQuestionAnswered }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    const answerExist = questions.find(
      question => question.hasVideoRecord.status === false
    );

    if (!answerExist) {
      handleAllQuestionAnswered(true);
      return setCurrentIndex(3);
    }

    if (currentIndex === questions.length - 1) {
      const allCompleted = questions.every(
        question => question.hasVideoRecord.status
      );

      if (allCompleted) {
        handleAllQuestionAnswered(true);
        return;
      }
    }

    const nextIndex = getNextIndex();
    setCurrentIndex(nextIndex);
  };

  const getNextIndex = () => {
    let nextIndex = currentIndex;

    while (true) {
      nextIndex = (nextIndex + 1) % questions.length;

      if (!questions[nextIndex].hasVideoRecord.status) {
        return nextIndex;
      }

      if (nextIndex === currentIndex) {
        break;
      }
    }

    return currentIndex;
  };

  return { handlePrevious, handleNext, currentIndex };
};
export default useIndexManager;
