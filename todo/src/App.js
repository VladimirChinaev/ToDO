import "./App.css";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect } from "react";
import SortDate from "./mainInterface/SortDate";
import Title from "./Title/Title";
import FilterStatus from "./mainInterface/filterStatus";
import Input from "./input/Input";
import Pagination from "./pagination/Pagination";
import axios from "axios";
import { debounce } from "./utils/debounce";
const API_GET_TODOS = "http://localhost:3500/api/todos";
const App = () => {
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("undone");
    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const todosPerPage = 5;
    useEffect(() => {
        getTodos();
    }, [filter]);

    const getTodos = async () => {
        try {
            const href =
                API_GET_TODOS + `?${filter && `filterBy=${filter}`}&order=asc`;
            const result = await axios.get(href);
            setFiltered(result.data.info);
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
            await axios.patch(API_GET_TODOS + `/${todo.uuid}`, {
                name: todo.name,
                done: todo.done === "done" ? "undone" : "done",
            });
            console.log(todo.name);
            console.log(todo.done);
            getTodos();
        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    const IndexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = IndexOfLastTodo - todosPerPage;

    const removeItem = async (uuid) => {
        try {
            await axios.delete(API_GET_TODOS + `/${uuid}`);
            await getTodos();

        } catch (err) {
            console.log(err);
            alert(err);
        }
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                    IndexOfLastTodo={IndexOfLastTodo}
                    indexOfFirstTodo={indexOfFirstTodo}
                    removeItem={removeItem}
                    changeStatus={changeStatus}
                />
            </div>
            <Pagination
                todosPerPage={todosPerPage}
                totalTodos={filtered.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;
