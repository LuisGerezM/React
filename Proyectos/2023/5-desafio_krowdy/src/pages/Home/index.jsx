import { useContext } from "react";
import { QuestionRecorderContext } from "@/contexts/Recorder.context";
import { routes } from "@/models/routes.models";

import HomeCard from "./components/HomeCard";
import { LinkReactRouter } from "@/components/LinkReactRouter";
import { CustomButton } from "@/components/CustomButton";

import { TitleText } from "@/styled-components/typography.styled";
import { HomeHeader, Section } from "./styles";

const Home = () => {
  const { questions, allQuestionsAnswered } = useContext(
    QuestionRecorderContext
  );

  const handleClickOnSend = () => {
    window.alert("Se enviarán los videos con tus respuestas!!");
  };

  return (
    <>
      <HomeHeader className='home-header'>
        <TitleText className='home-header-title'>Video Cuestionario</TitleText>
        <LinkReactRouter
          wrapLink='home-header-btn'
          to={routes.ANSWER_VIDEOS}
          text='Responder'
          borderRadius='8px'
        />
      </HomeHeader>
      <Section className='home-section' disabled={!allQuestionsAnswered}>
        <div className='home-section-body'>
          {questions.map(question => (
            <HomeCard key={"home-" + question.id} question={question} />
          ))}
        </div>

        <div className='home-section-footer'>
          <CustomButton
            buttonClass='home-section-footer-btn'
            onClick={handleClickOnSend}
            disabled={!allQuestionsAnswered}
            text='Enviar'
          />
        </div>
      </Section>
    </>
  );
};
export default Home;
