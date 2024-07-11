function Jukebox({ mainData, isPlaying }) {
    const playedRecord = mainData.find(record => record.isPlayed);

    return (
        <div className="jukebox">
            <div className="jukebox__head">
                <div className={playedRecord && isPlaying ? "jukebox__record spinning" : "jukebox__record"}>
                    <img className="jukebox__record-image" src={playedRecord ? playedRecord.imageUrl : "https://rms4.kufar.by/v1/list_thumbs_2x/adim1/0f5fb9d8-8f40-4ccc-af45-4aace9a6d7c8.jpg"} alt="record" />
                </div>
            </div>
            <div className="jukebox__body">
                <div className="jukebox__internal">
                    <div className="ticker-container">
                        <div className="ticker-content">
                            <span>{playedRecord ? `${playedRecord.artist} - ${playedRecord.title}` : 'Jukebox'}</span>
                        </div>
                    </div>
                    {playedRecord ? 
                    <a href={playedRecord.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <img src={playedRecord.imageUrl} alt="internal record"/>
                    </a>
                    :
                    <img src= "https://w7.pngwing.com/pngs/120/838/png-transparent-carpet-kitchen-textile-cotton-indigo-texture-furniture-computer-wallpaper-symmetry-thumbnail.png" alt="internal record" />
                    }
                    {/* <img src={playedRecord ? playedRecord.imageUrl : "https://w7.pngwing.com/pngs/120/838/png-transparent-carpet-kitchen-textile-cotton-indigo-texture-furniture-computer-wallpaper-symmetry-thumbnail.png"} alt="internal record" /> */}
                </div>
            </div>
            <div className="jukebox__leg jukebox__leg--left"></div>
            <div className="jukebox__leg jukebox__leg--right"></div>
        </div>
    );
}

export default Jukebox;