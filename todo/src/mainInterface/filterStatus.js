import React from 'react';

const FilterStatus = ({ setFilter }) => {
    const todoFilter = (todo) => {
        console.log("------------------------->", todo);
        setFilter(todo);
    }
    return (
        <div>
            <button type="button" className="buttons" onClick={() => todoFilter("")}
            >All</button>
            <button type="button" className="buttons" onClick={() => todoFilter("done")}
            >Done</button>
            <button type="button" className="buttons" onClick={() => todoFilter("undone")}
            >Undone</button>
        </div>
    )
}
export default FilterStatus;