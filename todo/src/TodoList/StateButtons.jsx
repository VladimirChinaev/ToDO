import "../css/style.css";
import { useState } from "react";
import axios from "axios";
const API_GET_TODOS = "https://back-end-api-1.herokuapp.com/api/todos";

const StateButton = ({ todo, removeItem, changeStatus, getTodos }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.name);
    const [showInput, setShowInput] = useState(false);

    const editItem = async (e, currentTitle) => {
        try {
            if (e.keyCode === 13) {
                await axios.patch(API_GET_TODOS + `/${todo.uuid}`, {
                    name: currentTitle,
                    done: todo.done === "done" ? "done" : "undone",
                });
                e.target.blur();
                setShowInput(false);
            }
            if (e.keyCode === 27) {
                e.target.blur();
                setShowInput(false);
                setCurrentTitle(todo.name);
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
                                editItem(e, currentTitle, todo.uuid)
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
                            removeItem(todo.uuid);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default StateButton;
