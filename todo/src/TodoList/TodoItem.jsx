import "../css/style.css";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
const API_GET_TODOS = "http://localhost:3505/api/todos";


const TodoItem = ({ todo, removeItem, changeStatus, getTodos, }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.name);
    const [showInput, setShowInput] = useState(false);
    const { token } = useContext(AuthContext);
    const editItem = async (e, currentTitle, todo) => {
        try {
            if (e.keyCode === 13) {
                await axios(API_GET_TODOS + `/${todo.id}`, {
                    method: "PATCH",
                    data: {
                        name: currentTitle,
                        done: todo.done !== "done" ? "done" : "undone",
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
            console.log(err);
            alert(err);
        }
    };
    return (
        <div key={todo.uuid}>
            <div className="todoElement">
                <div className="inElement">
                    <input
                        type="checkbox"
                        className="buttonComplete"
                        onClick={() => {
                            changeStatus(todo);
                        }}
                    />
                    {!showInput ? (
                        <span onDoubleClick={() => setShowInput(true)}>
                            {currentTitle}
                        </span>
                    ) : (
                        <input
                            value={currentTitle}
                            onKeyDown={(e) =>
                                editItem(e, currentTitle, todo)
                            }
                            className="sideInput"
                            onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                    )}
                </div>
                <div className="inElement">
                    <div>
                        {todo.createdAt.slice(0, 10) + ' ' + todo.createdAt.slice(11, -5)}
                    </div>
                    <input
                        type="button"
                        value="🗑"
                        className="buttonDelete"
                        onClick={() => {
                            removeItem(todo.id);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
