import "../css/style.css";
import { useState } from "react";

const StateButton = ({ todo, filtered, removeItem, changeStatus }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.name);
    const [showInput, setShowInput] = useState(false);

    const editItem = (e, currentTitle, uuid) => {
        const item = filtered.find((el) => el.uuid === uuid);
        const itemIndex = filtered.findIndex((el) => el.uuid === uuid);
        if (e.keyCode === 13) {
            item.name = currentTitle;
            const arr = filtered;
            arr[itemIndex] = item;
            setShowInput(false);
        }
        if (e.keyCode === 27) {
            e.target.blur();
            setShowInput(false);
            setCurrentTitle(todo.name);
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
