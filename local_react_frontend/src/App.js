import React from 'react';

import Navbar from './components/Navbar';
import Shelf from './components/Shelf';
import Filter from './components/Filter';
import Jukebox from './components/Jukebox';
import Player from './components/Player';
import SocialFooter from './components/SocialFooter';

import local_data from './data.js';


function App() {  
  const [mainData, setMainData] = React.useState(local_data);
  const inputRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const [isPlaying, setIsPlaying] = React.useState(true);
  const defaultVolume = 15
  const [volume, setVolume] = React.useState(defaultVolume);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
    
  React.useEffect(() => {
      fetch('http://localhost:8000')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              setMainData(data);
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
  }, []);

  React.useEffect(() => {
      const handleClick = () => {
          if (inputRef.current) {
              inputRef.current.focus();
          }
      };
      
      document.addEventListener('click', handleClick);

      return () => {
          document.removeEventListener('click', handleClick);
      };
  }, []);

  function handleClick(id) {
      setMainData(prevmainData => {
          return prevmainData.map((Record) => {
              return Record.id === id ? {...Record, isPlayed: true} : {...Record, isPlayed: false};
          });
      });
  }

  function handleSearchChange(searchString) {
      setMainData(prevmainData => {
          if (!searchString) {
              return prevmainData.slice().sort((a, b) => a.id - b.id);
          } else {
              return prevmainData.slice().sort((a, b) => {
                  const aIncludes = a.artist.toLowerCase().includes(searchString.toLowerCase());
                  const bIncludes = b.artist.toLowerCase().includes(searchString.toLowerCase());

                  if (aIncludes && !bIncludes) return -1;
                  if (!aIncludes && bIncludes) return 1;
                  return 0;
              });
          }
      });
  }

  const onPlay = () => {
      if (playerRef.current) {
          playerRef.current.playVideo();
          setIsPlaying(true);
      }
  };

  const onPause = () => {
      if (playerRef.current) {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
      }
  };

  const handleVolumeChange = (value) => {
      if (playerRef.current) {
          playerRef.current.setVolume(value);
          setVolume(value);
      }
  };

  const handleSeek = (time) => {
      if (playerRef.current) {
          playerRef.current.seekTo(time);
      }
  };

  return (
    <div>
        <Navbar
            onPlay={onPlay}
            onPause={onPause}
            onVolumeChange={handleVolumeChange}
            isPlaying={isPlaying}
            volume={volume}
            currentTime={currentTime}
            duration={duration}
            onSeek={handleSeek}
        />
        <Shelf
            mainData={mainData}
            handleClick={handleClick}
        />
        <Filter 
            onSearchChange={handleSearchChange}
            inputRef={inputRef} 
        />
        <Player 
            mainData={mainData}
            onPlayerReadyRef={playerRef}
            setVolume={setVolume}
            setIsPlaying={setIsPlaying}
            setCurrentTime={setCurrentTime}
            setDuration={setDuration}
        />
        <Jukebox 
            mainData={mainData}
            isPlaying={isPlaying}
        />
        <SocialFooter />
    </div>
  );
}

export default App;