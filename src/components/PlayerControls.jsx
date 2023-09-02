import { faPause, faStepBackward, faPlay, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const PlayerControls = () => {
    const music = useMusicPlayer();
    return (
        <div>
        <div>
            <p>{music.currentTrackName}</p>
        </div>
        <button style={{ fontSize: "larger", padding:'1rem', color:'tomato', background:'rgb(95, 95, 251)', margin:'10px', borderRadius:'1rem' }}>
        <FontAwesomeIcon 
        icon={faStepBackward}
        onClick={music.playPreviousTrack} />
        </button>

        <button onClick={music.togglePlay} style={{ fontSize: "larger", padding:'1rem', color:'tomato', background:'rgb(95, 95, 251)', margin:'10px', borderRadius:'1rem' }}>    
       {music.isPlaying ? (
        <FontAwesomeIcon icon={faPause} />)
        :(
        <FontAwesomeIcon icon={faPlay} />)}
        </button>
        <button style={{ fontSize: "larger", padding:'1rem', color:'tomato', background:'rgb(95, 95, 251)', margin:'10px',borderRadius:'1rem' }}>
        <FontAwesomeIcon icon={faStepForward}
            onClick={music.playNextTrack} />
        </button>
        
        </div>
    );
};

export { PlayerControls };