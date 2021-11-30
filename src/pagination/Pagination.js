import React from 'react';

const Pagination = ({ todosPerPage, totalTodos, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= (Math.ceil(totalTodos / todosPerPage)); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="mainSelect">
                <button onClick={() => { paginate(1) }} className="selectArrow">❮</button>
                {pageNumbers.map((number => (
                    <div key={number} select>
                        <button onClick={() => paginate(number)} href="!#" className="select">
                            {number}
                        </button>
                    </div>
                )))}
                <button onClick={() => { paginate(Math.ceil(totalTodos / todosPerPage)) }} className="selectArrow">❯</button>
            </div>
        </div>
    )
}

export default Pagination;