import React from 'react';

function Navbar({ onPlay, onPause, onVolumeChange, isPlaying, volume, currentTime, duration, onSeek }) {

    function handlePlayPauseClick() {
        isPlaying ? onPause() : onPlay()
    }

    function handleTimelineChange(event) {
        const time = (event.target.value / 100) * duration;
        onSeek(time);
    }

    console.log(`${duration} is a duration from Navbar`)

    return (
        <nav className="navbar">
            <div className="volume--pause--container">
            {!isPlaying ?
                <button className="play--button" onClick={handlePlayPauseClick}>
                    <svg width="15px" height="15px" viewBox="-1 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#1000]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00012000000000000002" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-65.000000, -3803.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M18.074,3650.7335 L12.308,3654.6315 C10.903,3655.5815 9,3654.5835 9,3652.8985 L9,3645.1015 C9,3643.4155 10.903,3642.4185 12.308,3643.3685 L18.074,3647.2665 C19.306,3648.0995 19.306,3649.9005 18.074,3650.7335" id="play-[#1000]"> </path> </g> </g> </g> </g></svg>
                </button>
                :
                <button onClick={handlePlayPauseClick}>
                    <svg width="15px" height="15px" viewBox="-1 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>pause [#1006]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-227.000000, -3765.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M172,3605 C171.448,3605 171,3605.448 171,3606 L171,3612 C171,3612.552 171.448,3613 172,3613 C172.552,3613 173,3612.552 173,3612 L173,3606 C173,3605.448 172.552,3605 172,3605 M177,3606 L177,3612 C177,3612.552 176.552,3613 176,3613 C175.448,3613 175,3612.552 175,3612 L175,3606 C175,3605.448 175.448,3605 176,3605 C176.552,3605 177,3605.448 177,3606" id="pause-[#1006]"> </path> </g> </g> </g> </g></svg>
                </button>
            }
            <input
                className="volume"
                type="range" 
                min="0" 
                max="100" 
                value={volume}
                onChange={(e) => onVolumeChange(e.target.value)} 
            />
            </div>
            <div className="timeline--container">
            <input 
                className="timeline"
                type="range" 
                min="0" 
                max="100" 
                value={(currentTime / duration) * 100}
                onChange={handleTimelineChange}
            />
            </div>
        </nav>
    );
}

export default Navbar;

