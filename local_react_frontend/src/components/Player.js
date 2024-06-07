import React from 'react';
import YouTube from 'react-youtube';


function Player({ state }) {
    const [videoId, setVideoId] = React.useState('');

    React.useEffect(() => {
        const playedRecord = state.find(record => record.isPlayed);
        if (playedRecord) {
            const videoUrl = playedRecord.youtubeUrl;
            const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
            const match = videoUrl.match(regex);
            const newVideoId = match ? match[1] : null;
            setVideoId(newVideoId);
        }
    }, [state]);

    const opts = {
        height: '200',
        width: '350',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="youtube--player--container" id="player">
            {videoId && (
                <YouTube className="" videoId={videoId} opts={opts} onReady={onPlayerReady} onStateChange={onPlayerStateChange} />
            )}
        </div>
    );

    function onPlayerReady(event) {
        console.log('Player ready');
    }

    function onPlayerStateChange(event) {
        console.log('Player state change', event.data);
    }
}

export default Player;