import Record from './Record'

function Shelf({ mainData, handleClick }) {
    const items = mainData.map(item => (
        <Record
            key={item.id}
            item={item}
            handleClick={handleClick}
            id={item.id}
            isPlayed={item.isPlayed}
        />
    ));

    return (
        <div className="shelf">
            {items}
        </div>
    );
}

export default Shelf;
