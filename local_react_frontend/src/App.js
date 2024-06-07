import React from 'react';

import Shelf from './components/Shelf'
import Filter from './components/Filter'
import Jukebox from './components/Jukebox'
import Player from './components/Player'
import SocialFooter from './components/SocialFooter'

import local_data from './data.js';

import './index.css';


function App() {  
  const [nowPlaying, setNowPlaying] = React.useState(local_data)
  const inputRef = React.useRef(null);

  React.useEffect(() => {
      fetch('http://localhost:8000')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              setNowPlaying(data);
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
      setNowPlaying(prevNowPlaying => {
          return prevNowPlaying.map((Record) => {
              return Record.id === id ? {...Record, isPlayed: true}: {...Record, isPlayed: false}
          })
      })
  }

  function handleSearchChange(searchString) {
      setNowPlaying(prevNowPlaying => {
          if (!searchString) {
              return prevNowPlaying.slice().sort((a, b) => a.id - b.id);
          } else {
              return prevNowPlaying.slice().sort((a, b) => {
                  const aIncludes = a.artist.toLowerCase().includes(searchString.toLowerCase());
                  const bIncludes = b.artist.toLowerCase().includes(searchString.toLowerCase());

                  if (aIncludes && !bIncludes) return -1;
                  if (!aIncludes && bIncludes) return 1;
                  return 0;
              });
          }
      });
  }

  return (
      <div>
          <Shelf data={nowPlaying} handleClick={handleClick}/>
          <Filter 
              data={nowPlaying} 
              onSearchChange={handleSearchChange}
              inputRef={inputRef} 
          />
          <Jukebox state={nowPlaying}/>
          <Player state={nowPlaying}/>
          <SocialFooter />
      </div>
  )
}

export default App;
