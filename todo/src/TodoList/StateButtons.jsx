import "../css/style.css"
import { useState } from "react";

const StateButton = (props) => {

    const [status, setStatus] = useState(props.todo.status)

    const removeItem = (id) => {
        props.setTodos((prevState) =>
            prevState.filter((props) => {
                return props.id !== id;
            })
        );
    };

    return (
        <div key={props.todo.id}>
            <div className="todoElement">
                <div className="inElement">
                    <input type="checkbox" className="buttonComplete" checked={status === "Done" ? true : false} onChange={() => {
                        let newStatus
                        if (props.todo.status === "Done") {
                            newStatus = "Undone";
                        } else {
                            newStatus = "Done"
                        }
                        setStatus(newStatus);
                        props.changeStatus(newStatus, props.todo.id)
                    }} />
                    <div>
                        {props.todo.title}
                    </div>
                </div>
                <div className="inElement">
                    <div>{props.todo.date}</div>
                    <input type="button" value="🗑" className="buttonDelete" onClick={() => {
                        removeItem(props.todo.id);
                    }} />
                </div>
            </div>
        </div>
    )
}


export default StateButton;