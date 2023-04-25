import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "react-h5-audio-player/lib/styles.css";
import audiointento1 from "./assets/mp3/audiointento1.mpeg";
import mySound from "./assets/mp3/sound.mp3";
const App = () => {
  const seconds = [10, 2, 11];

  const [tracks, setTracks] = useState([
    {
      url: mySound,
      title: "mi audio",
      tags: ["mi audio"],
    },
    {
      url: audiointento1,
      title: "mi audio2",
      tags: ["mi audio"],
    },
    {
      url: mySound,
      title: "mi audio3",
      tags: ["mi audio"],
    },
  ]);

  const [first, setfirst] = useState(seconds[0]);

  const ref = useRef();
  const nextClick = ({ isNext = true }) => {
    let next;
    if (isNext) {
      console.log({ first }, typeof first, seconds[2]);
      next = seconds.indexOf(first) + 1;
      console.log(next, seconds[next]);
    } else {
      console.log({ first }, typeof first, seconds[2]);
      const index = seconds.indexOf(first);
      console.log(index);
      if (index === 0) next = 0;
      else {
        next = seconds.indexOf(first) - 1;
        console.log(next, seconds[next]);
      }
    }

    setfirst(seconds[next]);
  };

  const colors = `html {
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #252a41;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #252a41;
    --titleColor: #cda156; 
    --timeColor: #cda156;
    --progressSlider: #1ca0f2;
    --progressUsed: #ffffff;
    --progressLeft: #028192;
    --volumeSlider: #1ca0f2;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #252a41;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #cda156;
}`;

  return (
    <div>
      <Container ref={ref}>
        <Player trackList={tracks} includeSearch={false} customColorScheme={colors} />
        <button onClick={() => nextClick({ isNext: false })}>toca para volver</button>
        <button onClick={nextClick}>toca para ir al siguiente</button>
      </Container>
    </div>
  );
};

export default App;
