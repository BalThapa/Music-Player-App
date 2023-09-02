import { useState } from "react";
import "./App.css";
import { PlayerControls } from "./components/PlayerControls";
import TrackList from "./components/TrackList";
import { MusicContext } from "./contexts/MusicContext";
import Track1 from "./assets/Track1.mp3";
import Track2 from "./assets/Track2.mp3";
import Track3 from "./assets/Track3.mp3";
import Track4 from "./assets/Track4.mp3";
import Track5 from "./assets/Track5.mp3";

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(Track1),
    tracks: [
      {
        name: "Track 1",
        file: Track1,
      },
      {
        name: "Track 2",
        file: Track2,
      },
      {
        name: "Track 3",
        file: Track3,
      },
      {
        name: "Track 4",
        file: Track4,
      },
      {
        name: "Track 5",
        file: Track5,
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,
  });

  console.log("State: ", state);
  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;
