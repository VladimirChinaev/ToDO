import React from 'react';

const Paginate = ({ todosPerPage, numbersOfTodos, setCurrentPage, getTodos, currentPage }) => {
    console.log(currentPage);
    const pageNumbers = [];
    for (let i = 1; i <= (Math.ceil(numbersOfTodos / todosPerPage)); i++) {
        pageNumbers.push(i);
    }

    const pag = (number) => {
        setCurrentPage(number);
        pagination();
    }
    const pagination = async (req) => {
        try {
            getTodos();
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    }
    console.log(currentPage);
    console.log(numbersOfTodos);
    return (
        <div>
            <div className="mainSelect">
                {numbersOfTodos > 0 ?
                    <div className="inSelect">
                        <button onClick={() => { pag(1) }} className="selectArrow">❮</button>
                        {pageNumbers.map((number => (
                            <div key={number} select>
                                <button onClick={() => pag(number)} href="!#" className="select">
                                    {number}
                                </button>
                            </div>
                        )))}
                        <button onClick={() => { pag(Math.ceil(numbersOfTodos / todosPerPage)) }} className="selectArrow">❯</button>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default Paginate;



