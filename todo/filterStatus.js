import React from 'react';

const FilterStatus = (props) => {
    return (
        <div>
            <button type="button" className="buttons" onClick={() => props.todoFilter("All")}
            >All</button>
            <button type="button" className="buttons" onClick={() => props.todoFilter("Done")}
            >Done</button>
            <button type="button" className="buttons" onClick={() => props.todoFilter("Undone")}
            >Undone</button>
        </div>
    )
}
export default FilterStatus;