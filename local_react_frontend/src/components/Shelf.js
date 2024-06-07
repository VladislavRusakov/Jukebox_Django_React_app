import Record from './Record'

function Shelf({ data, handleClick }) {
    const items = data.map(item => (
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
