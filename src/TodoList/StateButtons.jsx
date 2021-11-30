import "../css/style.css"
import { useState } from "react";


const StateButton = ({ todo, setTodos, filtered, changeStatus }) => {
    const [currentTitle, setCurrentTitle] = useState(todo.title);

    const editItem = (e, currentTitle, id) => {
        const item = filtered.find(el => el.id === id);

        const itemIndex = filtered.findIndex(el => el.id === id);
        if (e.keyCode === 13) {
            item.title = currentTitle
            const arr = filtered
            arr[itemIndex] = item
            setTodos(arr);
        }
        if (e.keyCode === 27) {
            e.target.blur();
            setCurrentTitle(todo.title)
        }

    }

    const removeItem = (id) => {
        setTodos((prevState) =>
            prevState.filter((props) => {
                return props.id !== id;
            })
        );
    };

    return (
        <div key={todo.id}>
            <div className="todoElement">
                <div className="inElement">
                    <input type="checkbox" className="buttonComplete" defaultChecked={todo.status === "Done" ? true : false} onChange={() => {
                        let newStatus
                        if (todo.status === "Done") {
                            newStatus = "Undone";
                        } else {
                            newStatus = "Done"
                        }
                        changeStatus(newStatus, todo.id)
                    }} />
                    <div>
                        <input value={currentTitle} onKeyDown={(e) => editItem(e, currentTitle, todo.id)} className="sideInput" onChange={(e) => setCurrentTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="inElement">
                    <div>{todo.date}</div>
                    <input type="button" value="🗑" className="buttonDelete" onClick={() => {
                        removeItem(todo.id);
                    }} />
                </div>
            </div>
        </div>
    )
}


export default StateButton;