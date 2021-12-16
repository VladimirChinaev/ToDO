import "../css/style.css";
import axios from "axios";
import { useState } from "react";
const API_GET_TODOS = "http://localhost:3505/api/todos";


const TodoItem = ({ todo, removeItem, changeStatus, getTodos, }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.name);
    const [showInput, setShowInput] = useState(false);
    const editItem = async (e, currentTitle, todo) => {
        try {
            if (e.keyCode === 13) {
                await axios(API_GET_TODOS + `/${todo.uuid}`, {
                    method: "PATCH",
                    body: {
                        name: currentTitle,
                        done: todo.done === "done" ? "done" : "undone",
                    },
                });
                e.target.blur();
            }
            if (e.keyCode === 27) {
                e.target.blur();
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
                        defaultChecked={todo.done === true ? true : false}
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
                                editItem(e, currentTitle, todo.id)
                            }
                            className="sideInput"
                            onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                    )}
                </div>
                <div className="inElement">
                    <div>
                        {new Date(Date.parse(todo.updatedAtt)).toLocaleString()}
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
