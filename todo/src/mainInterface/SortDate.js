const SortDate = () => {

    const handleSort = () => {

    }
    return (
        <div className="saideInterface">
            <h4>Sort by date:</h4>
            <button className="arrows" type="button" onClick={() => {
                handleSort();
            }}>⤊</button>
            <button className="arrows" type="button" onClick={() => {
                handleSort();
            }}>⤋</button>
        </div>
    );

}

export default SortDate;