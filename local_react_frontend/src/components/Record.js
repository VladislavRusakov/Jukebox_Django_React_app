function Record({ item, handleClick, id }) {
    return (
        <div className="record">
            <div className="face spine white">
                <div className="rotated-text">{item.artist}</div>
            </div>
            <div className="face cover" onClick={() => handleClick(id)}>
                {/* <a href={item.youtubeUrl || "#"} target={item.youtubeUrl ? "_blank" : "_self"} rel="noopener noreferrer"> */}
                <a target={item.youtubeUrl ? "_blank" : "_self"} rel="noopener noreferrer">
                    <img src={item.imageUrl} alt={item.title} />
                </a>
            </div>
        </div>
    );
}

export default Record;