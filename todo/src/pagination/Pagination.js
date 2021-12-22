import React from 'react';

const Paginate = ({ todosPerPage, numbersOfTodos, setCurrentPage, getTodos }) => {
    const pageNumbers = [];
    for (let i = 1; i <= (Math.ceil(numbersOfTodos / todosPerPage)); i++) {
        pageNumbers.push(i);
    }

    const pagination = async (number) => {
        try {
            setCurrentPage(number);
            getTodos();
        }
        catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className="mainSelect">
                {numbersOfTodos > 0 ?
                    <div className="inSelect">
                        <button onClick={() => { pagination(1) }} className="selectArrow">❮</button>
                        {pageNumbers.map((number, index) => (
                            <div key={index} select>
                                <button onClick={() => pagination(number)} href="!#" className="select">
                                    {number}
                                </button>
                            </div>
                        ))}
                        <button onClick={() => { pagination(Math.ceil(numbersOfTodos / todosPerPage)) }} className="selectArrow">❯</button>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default Paginate;



