import { useContext, useEffect, useRef, useState } from "react";

import { QuestionRecorderContext } from "@/contexts/Recorder.context";

import { CustomButton } from "../CustomButton";
import CustomImage from "../CustomImage";
import CustomVideoPreview from "../CustomVideoPreview";
import AlreadyHaveRecordedVideo from "./components/AlreadyHaveRecordedVideo";

import { PulseCircle, WrapCustomVideo } from "./styles";
import useVideoRecorderManager from "./hooks/useVideoRecorderManager";
import { srcIcons } from "@/models/srcIcons.models";

const CustomVideoRecorder = ({ id, widthCustomVideo }) => {
  const { handleAddAnswerToQuestion, questions } = useContext(
    QuestionRecorderContext
  );

  const {
    videoRef,
    recording,
    recordedVideoURL,
    previewMode,
    timer,
    startRecording,
    stopRecording,
    handlePreview,
    handleRetake,
    formatTime
  } = useVideoRecorderManager({ id, questions });

  useEffect(() => {
    handleAddAnswerToQuestion(id, recordedVideoURL);
  }, [recordedVideoURL]);

  const renderRecorder = () => {
    if (previewMode && recordedVideoURL) {
      return <CustomVideoPreview recordedVideoURL={recordedVideoURL} text />;
    }

    if (recordedVideoURL) {
      return (
        <AlreadyHaveRecordedVideo
          handleRetake={handleRetake}
          handlePreview={handlePreview}
        />
      );
    }

    return (
      <article className='custom-video-recorder'>
        <div className='custom-video-recorder-timer'>
          {formatTime(timer)} / 2:00
          <PulseCircle recording={recording.toString()} />
        </div>
        <video
          className='custom-video-recorder-cam'
          ref={videoRef}
          playsInline
          autoPlay
          muted
        />
        <div className='custom-video-recorder-wrap-btns'>
          <CustomButton
            onClick={!recording ? startRecording : stopRecording}
            buttonClass='custom-video-recorder-wrap-btns-btn'
          >
            <CustomImage
              src={!recording ? srcIcons.PLAY_ICON : srcIcons.STOP_ICON}
              alt='play icon'
              title='Play icon'
            />
          </CustomButton>
        </div>
      </article>
    );
  };

  return (
    <WrapCustomVideo
      className='custom-video'
      widthcustomvideo={widthCustomVideo}
    >
      {renderRecorder()}
    </WrapCustomVideo>
  );
};
export default CustomVideoRecorder;
