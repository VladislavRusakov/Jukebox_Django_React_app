function Shelf(props) {
    let items = props.data.map(item => {
        return (
        <Record
            key={item.id}
            item={item}
            handleClick={props.handleClick}
            id={item.id}
            isPlayed={item.isPlayed}
        />
        )})

    return (
    <div className="shelf">
        {items}
    </div>
    )
}

function Jukebox(props) {
    const playedRecord = props.state.find((Record) => Record.isPlayed ? Record.imageUrl: false)

    return (
    <div className="jukebox">
        <div className="jukebox__head">
            <div className={playedRecord ? "jukebox__record spinning": "jukebox__record"}>
                {playedRecord ? <img className="jukebox__record-image" src={playedRecord.imageUrl} />:
                 <img className="jukebox__record-image" src="https://rms4.kufar.by/v1/list_thumbs_2x/adim1/0f5fb9d8-8f40-4ccc-af45-4aace9a6d7c8.jpg" />}
            </div>
        </div>
        <div className="jukebox__body">
            <div className="jukebox__internal">
                <div className="ticker-container">
                <div className="ticker-content">
                    {playedRecord ? <span>{ playedRecord.artist} - {playedRecord.title}</span>:
                    <span>Jukebox</span>
                    }
                </div>
                </div>
                {playedRecord ? <img src={playedRecord.imageUrl} />:
                 <img src="https://w7.pngwing.com/pngs/120/838/png-transparent-carpet-kitchen-textile-cotton-indigo-texture-furniture-computer-wallpaper-symmetry-thumbnail.png" />}
            </div>
        </div>
        <div className="jukebox__leg jukebox__leg--left"></div>
        <div className="jukebox__leg jukebox__leg--right"></div>
    </div>
    )
}

function Record(props) {

    return (
        <div className="record" key={props.item.id}>
          <div className="face spine white">
            <div className="rotated-text">{props.item.artist}</div>
          </div>
            <div className="face cover" onClick={()=>props.handleClick(props.id)}>    
                {
                    props.item.youtubeUrl ?      
                    <a href={props.item.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <img src={props.item.imageUrl}/>
                    </a>: 
                    <a>
                        <img src={props.item.imageUrl}/>
                    </a>
                }
            </div>
        </div>
    )
}

function App() {
    
    const [nowPlaying, setNowPlaying] = React.useState([])

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

    function handleClick(id) {
        setNowPlaying(prevNowPlaying => {
            return prevNowPlaying.map((Record) => {
                return Record.id === id ? {...Record, isPlayed: true}: {...Record, isPlayed: false}
            })
        })
    }

    return (
        <div>
            <Shelf data={nowPlaying} handleClick={handleClick}/>
            <Jukebox state={nowPlaying}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))