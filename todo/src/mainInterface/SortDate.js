const SortDate = (props) => {
    const handleSort = (typeSort) => {
    }
    return (
        <div className="saideInterface">
            <h4>Sort by date:</h4>
            <button className="arrows" type="button" onClick={() => {
                handleSort("Up");
            }}>⤊</button>
            <button className="arrows" type="button" onClick={() => {
                handleSort("Down");
            }}>⤋</button>
        </div>
    );

}

export default SortDate;