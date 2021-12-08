import "./App.css";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect } from "react";
import SortDate from "./mainInterface/SortDate";
import Title from "./Title/Title";
import FilterStatus from "./mainInterface/filterStatus";
import Input from "./input/Input";
import Paginate from "./pagination/Pagination";
import axios from "axios";
const API_GET_TODOS = "http://localhost:3502/api/todos";
const App = () => {
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numbersOfTodos, setNumbersOfTodos] = useState();
    const todosPerPage = 5;
    console.log(currentPage);
    useEffect(() => {
        getTodos();
    }, [filter, currentPage]);

    const getTodos = async () => {
        const filterForQuery = filter && `filterBy=${filter}`;
        try {
            const href =
                API_GET_TODOS +
                `?${filterForQuery}
                &page=${currentPage}
                &order=asc
                `;
            console.log(href);
            const result = await axios.get(href);
            setFiltered(result.data.info);
            setNumbersOfTodos(result.data.count);
            console.log(filtered);
        } catch (err) {
            alert(err);
        }
    };
    const handleCreateTodos = async (e, name) => {
        try {
            e.preventDefault();
            await axios.post(API_GET_TODOS, {
                name: name,
                done: "undone",
            });
            getTodos();
            setText("");
        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    const changeStatus = async (todo) => {
        try {
            const resault = await axios.patch(API_GET_TODOS + `/${todo.uuid}`, {
                name: todo.name,
                done: todo.done === "done" ? "undone" : "done",
            });
            setCurrentPage(resault.data.page);
            getTodos();
        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    const removeItem = async (uuid) => {
        try {
            await axios.delete(API_GET_TODOS + `/${uuid}`);
            await getTodos();
        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    const IndexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = IndexOfLastTodo - todosPerPage;

    return (
        <div className="container">
            <Title />
            <div className="mainInput">
                <Input
                    text={text}
                    setText={setText}
                    handleCreateTodos={handleCreateTodos}
                />
            </div>
            <div className="mainInterface">
                <FilterStatus setFilter={setFilter} />
                <SortDate filtered={filtered} setFiltered={setFiltered} />
            </div>
            <div className="todoList">
                <TodoList
                    filtered={filtered}
                    removeItem={removeItem}
                    changeStatus={changeStatus}
                    getTodos={getTodos}
                    IndexOfLastTodo={IndexOfLastTodo}
                    indexOfFirstTodo={indexOfFirstTodo}
                />
            </div>
            <Paginate
                todosPerPage={todosPerPage}
                numbersOfTodos={numbersOfTodos}
                setCurrentPage={setCurrentPage}
                getTodos={getTodos}
                currentPage={currentPage}
            />
        </div>
    );
};

export default App;
