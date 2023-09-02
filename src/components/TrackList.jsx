import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const TrackList = () => {
    const music = useMusicPlayer();
    return (
        <div>
           {music.TrackList.map((track, index)=>(
            <div key={`${track}_${index}`}>
                <button onClick={()=> music.playTrack(index)} style={{ fontSize: "1.5rem", color:'tomato', background:'rgb(95, 95, 251)', margin:'5px', borderRadius:'10px', padding:'5px' }}>
                    {music.isPlaying && music.currentTrackIndex === index ? (
                        <FontAwesomeIcon icon={faPause} />
                    ):(
                        <FontAwesomeIcon icon={faPlay} /> 
                    )}
                </button>
                <div>Track Playing: {track.name}</div>
            </div>
           ))} 
        </div>
    );
};

export default TrackList;