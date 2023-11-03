import { CustomButton } from "@/components/CustomButton";
import CustomImage from "@/components/CustomImage";

import { themeColors } from "@/styled-components/Theme.styled";
import { SubtitleText, TitleText } from "@/styled-components/typography.styled";
import { WrapAlreadyHaveRecordedVideo } from "./styles";
import { srcIcons } from "@/models/srcIcons.models";

const AlreadyHaveRecordedVideo = ({ handleRetake, handlePreview }) => {
  return (
    <WrapAlreadyHaveRecordedVideo className='already-recorded-video'>
      <TitleText color={themeColors.white}>Video Grabado</TitleText>
      <SubtitleText color={themeColors.white}>
        Ya tienes un video grabado
      </SubtitleText>
      <div className='already-recorded-video-wrap-btn'>
        <CustomButton
          buttonClass='already-recorded-video-wrap-btn-updated'
          onClick={handleRetake}
        >
          <CustomImage
            className='already-recorded-video-wrap-btn-image'
            src={srcIcons.UPDATED_ICON}
            alt='preview icon'
            title='Preview video'
          />
        </CustomButton>
        <CustomButton
          buttonClass='already-recorded-video-wrap-btn-prev'
          onClick={handlePreview}
          text='Previsualizar'
        />
      </div>
    </WrapAlreadyHaveRecordedVideo>
  );
};
export default AlreadyHaveRecordedVideo;
