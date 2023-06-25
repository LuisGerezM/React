import { useEffect, useRef, useState } from "react";

const useVideoRecorderManager = ({ id, questions }) => {
  const videoRef = useRef(null);

  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedBlobs, setRecordedBlobs] = useState([]);
  const [recording, setRecording] = useState(false);
  const [recordedVideoURL, setRecordedVideoURL] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const answerExist =
      questions.find(
        question => question.id === id && question.hasVideoRecord.status
      ) || null;

    if (answerExist) setRecordedVideoURL(answerExist.hasVideoRecord.video);
    else setRecordedVideoURL(null);

    return () => {
      setTimer(0);
      setPreviewMode(false);
      setRecordedBlobs([]);
      setRecordedVideoURL(null);
    };
  }, [id]);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.onstop = handleRecordingStop;
    }
  }, [mediaRecorder]);

  useEffect(() => {
    if (recordedBlobs.length > 0) {
      handleRecordingStop();
    }
  }, [recordedBlobs]);

  useEffect(() => {
    if (recording) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [recording]);

  useEffect(() => {
    if (timer === 121) {
      stopRecording();
    }
  }, [timer]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
      });

      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const mimeType = "video/webm";
      const options = { mimeType };

      let recorder;
      try {
        recorder = new MediaRecorder(stream, options);
      } catch (error) {
        console.error("Exception while creating MediaRecorder:", error);
        return;
      }

      setRecordedBlobs([]);
      setMediaRecorder(recorder);
      setRecording(true);

      recorder.start();
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const handleDataAvailable = event => {
    if (event.data && event.data.size > 0) {
      setRecordedBlobs(prevBlobs => [...prevBlobs, event.data]);
    }
  };

  const handleRecordingStop = () => {
    if (recordedBlobs.length > 0) {
      const superBuffer = new Blob(recordedBlobs, { type: "video/webm" });
      const videoURL = URL.createObjectURL(superBuffer);
      setRecordedVideoURL(videoURL);
    }
  };

  const handlePreview = () => {
    setPreviewMode(true);
  };

  const handleRetake = () => {
    setTimer(0);
    setPreviewMode(false);
    setRecordedBlobs([]);
    setRecordedVideoURL(null);
    startRecording();
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return {
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
  };
};
export default useVideoRecorderManager;
