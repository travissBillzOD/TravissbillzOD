import React, { useRef, useState } from 'react';
import play from "./icons/play.png"
import pause from "./icons/pause.png"
import get from "./icons/get.png"
 import mack from "./icons/audiomack-seeklogo.png"
 import "./App.css"
import Mack from './mack';

const SongCard = ({ song }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
        <div>
    <div className="song-card">
        
       
       
         <div className='song-view'>
              <ol className='pro-img'>
              <li> <img src={song.image} alt={song.title} className="song-image" /></li>
              </ol>
              <h3>{song.title}</h3>
              <ul>
              <li> <button onClick={togglePlay}>
              {isPlaying ? <img className='ico' src={pause} alt='' /> :<img className='ico' src={play} alt='' /> }
          </button></li>
              <li><a href={song.audioUrl} download>
              <img src={get} className='ico' alt=''/>
               </a></li>
              </ul>
              
         </div>
      
      
      <audio ref={audioRef} src={song.audioUrl}></audio> 
       
    </div>
    
 
    </div>
  );
};

export default SongCard;