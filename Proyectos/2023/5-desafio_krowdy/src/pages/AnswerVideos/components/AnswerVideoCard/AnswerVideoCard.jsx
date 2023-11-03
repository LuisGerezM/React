import CustomVideoRecorder from "@/components/CustomVideoRecorder";
import { ArticleAnswerVideoCard } from "./styles";

const AnswerVideoCard = ({ id }) => {
  return (
    <ArticleAnswerVideoCard className='answerVideos-article'>
      <CustomVideoRecorder id={id} widthCustomVideo='80%' />
    </ArticleAnswerVideoCard>
  );
};
export default AnswerVideoCard;
