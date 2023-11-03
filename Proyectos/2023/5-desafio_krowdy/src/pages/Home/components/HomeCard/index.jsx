import { CustomButton } from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";
import CustomVideoPreview from "@/components/CustomVideoPreview";

import { themeColors } from "@/styled-components/Theme.styled";
import { InputTexts } from "@/styled-components/typography.styled";
import { Card } from "./styles";
import { srcIcons } from "@/models/srcIcons.models";

const HomeCard = ({ question: { hasVideoRecord, question } }) => {
  return (
    <Card className='card' hasvideorecord={hasVideoRecord}>
      <div className='card-body'>
        {hasVideoRecord.status ? (
          <div className='card-body-video-preview'>
            <CustomVideoPreview recordedVideoURL={hasVideoRecord.video} />
          </div>
        ) : (
          <InputTexts className='card-body-message' color={themeColors.white}>
            Aun no respondiste esta pregunta
          </InputTexts>
        )}
        {!hasVideoRecord.status && (
          <CustomButton
            buttonClass='card-body-btn'
            disabled={!hasVideoRecord.status}
          >
            <CustomImage
              imageClass='card-body-btn-img'
              src={srcIcons.PLAY_ICON}
              alt='play icon'
              title='Play icon'
            />
          </CustomButton>
        )}
      </div>
      <div className='card-footer'>{question}</div>
    </Card>
  );
};
export default HomeCard;
