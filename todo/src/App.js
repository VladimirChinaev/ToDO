import "./App.css";
import TodoList from "./TodoList/TodoList";
import { useState, useEffect, useContext } from "react";
import SortDate from "./mainInterface/SortDate";
import Title from "./Title/Title";
import FilterStatus from "./mainInterface/filterStatus";
import Input from "./input/Input";
import Paginate from "./pagination/Pagination";
import axios from "axios";
import { AuthContext } from "./context/auth.context";
import { useNavigate } from "react-router-dom";
import Exit from "./mainInterface/LogOut";
import { authPage } from "./pages/EndPoints"
import { API_GET_TODOS, GET_TASK, GET_POST, GET_DELETE, GET_PATCH } from "./pages/EndPoints";
const App = () => {
    const [text, setText] = useState("");
    const [filter, setFilter] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numbersOfTodos, setNumbersOfTodos] = useState();
    const { token } = useContext(AuthContext);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const todosPerPage = 5;
    useEffect(() => {
        if (token) { getTodos(); }
    }, [filter, currentPage, token]);

    const getTodos = async () => {
        const filterForQuery = filter && `filterBy=${filter}`;
        try {
            const href =
                API_GET_TODOS + GET_TASK + `?${filterForQuery}&page=${currentPage}&order=asc`;
            const result = await axios({
                method: "GET",
                url: href,
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            setFiltered(result.data.data.rows);
            setNumbersOfTodos(result.data.count);
        } catch (err) {
            alert(err);
        }
    };


    const handleCreateTodos = async (e, name) => {
        try {
            e.preventDefault();
            await axios(API_GET_TODOS + GET_POST, {
                method: "POST",
                data: {
                    name: name,
                    done: "undone",
                },
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            getTodos();
            setText("");
        } catch (err) {
            alert(err);
        }
    };

    const changeStatus = async (todo) => {
        try {
            await axios(API_GET_TODOS + GET_PATCH + `/${todo.id}`, {
                method: "PATCH",
                data: {
                    name: todo.name,
                    done: todo.done !== "done" ? "done" : "undone"
                },
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            getTodos();
        } catch (err) {
            alert(err);
        }
    };

    const editItem = async (e, currentTitle, todo, setShowInput, setCurrentTitle) => {
        try {
            if (e.keyCode === 13) {
                await axios(API_GET_TODOS + GET_PATCH + `/${todo.id}`, {
                    method: "PATCH",
                    data: {
                        name: currentTitle,
                        done: todo.done !== "undone" ? "done" : "undone",
                    },
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                e.target.blur();
                setShowInput(false);
            }
            if (e.keyCode === 27) {
                e.target.blur();
                setCurrentTitle(todo.name);
                setShowInput(false);
            }
            getTodos();
        } catch (err) {
            alert(err);
        }
    };

    const removeItem = async (id) => {
        try {
            await axios(API_GET_TODOS + GET_DELETE + `/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                }
            });
            await getTodos();
            if (filtered.length - 1 === 0 && currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        } catch (err) {
            alert(err);
        }
    };

    const Escape = async () => {
        try {
            auth.logout();
            navigate(authPage, { replace: true });
        } catch (e) {
            alert(e);
        }
    }

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
                <Exit Escape={Escape} />
            </div>
            <div className="todoList">
                {filtered ?
                    (<TodoList
                        filtered={filtered}
                        removeItem={removeItem}
                        editItem={editItem}
                        IndexOfLastTodo={IndexOfLastTodo}
                        indexOfFirstTodo={indexOfFirstTodo}
                        getTodos={getTodos}
                        changeStatus={changeStatus}
                        setFiltered={setFiltered}
                    />)
                    : void (0)}
            </div>
            <Paginate
                todosPerPage={todosPerPage}
                numbersOfTodos={numbersOfTodos}
                setCurrentPage={setCurrentPage}
                getTodos={getTodos}
            />

        </div>
    );
};

export default App;
