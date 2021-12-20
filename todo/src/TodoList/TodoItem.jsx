import "../css/style.css";
import { useState } from "react";


const TodoItem = ({ todo, removeItem, editItem, changeStatus }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.name);
    const [showInput, setShowInput] = useState(false);

    return (
        <div key={todo.uuid}>
            <div className="todoElement">
                <div className="inElement">
                    <input
                        type="checkbox"
                        className="buttonComplete"
                        onClick={(e) => {
                            changeStatus(todo);
                        }}
                        checked={todo.done === 'done'}
                    />
                    {!showInput ? (
                        <span onDoubleClick={() => setShowInput(true)}>
                            {currentTitle}
                        </span>
                    ) : (
                        <input
                            value={currentTitle}
                            onKeyDown={(e) =>
                                editItem(e, currentTitle, todo, setShowInput, setCurrentTitle)
                            }
                            className="sideInput"
                            onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                    )}
                </div>
                <div className="inElement">
                    <div>
                        {todo.createdAtt.slice(0, 10) + ' ' + todo.updatedAtt.slice(11, -5)}
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
