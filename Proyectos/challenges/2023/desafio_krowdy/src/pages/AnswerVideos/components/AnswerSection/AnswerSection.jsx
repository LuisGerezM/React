import { routes } from "@/models/routes.models";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/CustomButton";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import AnswerVideoCard from "../AnswerVideoCard/AnswerVideoCard";

import { InputTexts } from "@/styled-components/typography.styled";
import { BodyAnswerSection, FooterAnswerSection } from "./styles";

const AnswerSection = ({
  handlePrevious,
  handleNext,
  currentIndex,
  question: { id, question }
}) => {
  const { questions, allQuestionsAnswered } = useContext(
    QuestionRecorderContext
  );
  const navigate = useNavigate();
  const handleReturnToList = () => navigate(routes.HOME, { replace: true });

  const isFinished =
    allQuestionsAnswered &&
    currentIndex === questions.length - 1 &&
    questions[currentIndex].hasVideoRecord.status;

  return (
    <section className='answer-section'>
      <BodyAnswerSection className='answer-section-body'>
        <AnswerVideoCard id={id} />
        <InputTexts className='answer-section-question'>{question}</InputTexts>
      </BodyAnswerSection>

      <FooterAnswerSection className='answer-section-footer'>
        <CustomButton
          buttonClass='answer-section-footer-btn prev'
          onClick={handlePrevious}
          text='Volver'
        />
        <CustomButton
          buttonClass='answer-section-footer-btn next'
          onClick={isFinished ? handleReturnToList : handleNext}
          text={isFinished ? "Terminar" : "Siguiente"}
        />
      </FooterAnswerSection>
    </section>
  );
};
export default AnswerSection;
