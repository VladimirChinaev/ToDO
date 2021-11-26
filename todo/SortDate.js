import React from 'react';

const SortDate = ({ setFiltered, filtered }) => {
    const sortByDate = (where) => {
        if(where === 'Up') {
            setFiltered(filtered => [...filtered].sort((a,b) => {
                if(a.date > b.date) {
                    return 1;
                } else {
                    return -1;
                }
            }));
        } else {
            setFiltered(filtered => [...filtered].sort((a,b) => { 
                if(a.date < b.date) {
                    return 1;
                } else {
                    return -1;
                }
            }));
        }
    }

    return (
        <div className="saideInterface">
            <h4>Sort by date:</h4>
            <button className="arrows" type="button" onClick={() => {
                sortByDate("Up");
            }}>⤊</button>
            <button className="arrows" type="button" onClick={() => {
                sortByDate("Down");
            }}>⤋</button>
        </div>
    );

}

export default SortDate;