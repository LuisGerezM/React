import { SubtitleText } from "@/styled-components/typography.styled";

const CustomVideoPreview = ({ recordedVideoURL, text }) => {
  return (
    <div>
      {text && (
        <SubtitleText className='custom-video-preview-subtitle'>
          Previsualizar Video
        </SubtitleText>
      )}
      <video
        className='custom-video-preview-repeat'
        src={recordedVideoURL}
        controls
      />
    </div>
  );
};
export default CustomVideoPreview;
