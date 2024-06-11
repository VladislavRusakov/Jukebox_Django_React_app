import React from 'react';
import YouTube from 'react-youtube';

function Player({ mainData, onPlayerReadyRef, setVolume, setIsPlaying, setCurrentTime, setDuration }) { // Changes: Added setCurrentTime and setDuration as props
    const playerRef = React.useRef(null);
    const [videoId, setVideoId] = React.useState('');

    React.useEffect(() => {
        const playedRecord = mainData.find(record => record.isPlayed);
        if (playedRecord) {
            const videoUrl = playedRecord.youtubeUrl;
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
            const match = videoUrl.match(regex);
            const newVideoId = match ? match[1] : null;
            setVideoId(newVideoId);
        }
    }, [mainData]);

    const opts = {
        height: '200',
        width: '350',
        playerVars: {
            autoplay: 1,
        },
    };

    function onPlayerReady(event) {
        playerRef.current = event.target;
        if (onPlayerReadyRef) {
            onPlayerReadyRef.current = event.target;
        }
        setVolume(event.target.getVolume()); // Changes
        setIsPlaying(event.target.getPlayerState() === 1); // Changes: 1 is the state code for playing
        setDuration(event.target.getDuration()); // Changes: Set video duration

        // Polling to update current time
        setInterval(() => {
            setCurrentTime(event.target.getCurrentTime());
        }, 1000);
    }

    function onPlayerStateChange(event) {
        console.log('Player state change', event.data);
        setIsPlaying(event.data === 1); // Changes: 1 is the state code for playing
    }

    return (
        <div className="youtube--player--container" id="player">
            {videoId && (
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={onPlayerReady}
                    onStateChange={onPlayerStateChange}
                />
            )}
        </div>
    );
}

export default Player;
