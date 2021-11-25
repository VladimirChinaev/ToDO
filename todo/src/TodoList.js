import StateButtons from "./StateButtons";
import { v4 as uuidv4 } from 'uuid';



const TodoList = (props) => {


    const handleChange = (e) => {
        props.setText(e.target.value);
    };

    let taskElements = props.filtered.map(e => <StateButtons removeItem={props.removeItem} setTodos={props.setTodos} todos={props.todos} setText={props.setText} text={props.text} changeStatus={props.changeStatus} todo={e} />)
    return (
        <form onSubmit={props.handleChangeTodos}>
            <div className="title">
                <h1>ToDo</h1>
            </div>
            <div className="mainInput">
                <input
                    type="text"
                    placeholder="I want to..."
                    value={props.text}
                    onChange={handleChange}
                    className="input"
                ></input>
            </div>
            <div className="mainInterface">
                <div>
                    <button type="button" className="buttons" onClick={() => props.todoFilter("All")}
                    >All</button>
                    <button type="button" className="buttons" onClick={() => props.todoFilter("Done")}
                    >Done</button>
                    <button type="button" className="buttons" onClick={() => props.todoFilter("Undone")}
                    >Undone</button>
                </div>
                <div className="saideInterface">
                    <h4>Sort by date:</h4>
                    <button className="arrows" type="button">⤊</button>
                    <button className="arrows" type="button">⤋</button>
                </div>
            </div>
            <div className="todoList">
                {taskElements.map((task) => {
                    return (<div key={uuidv4()}>{task}</div>)
                })}
            </div>
            <div className="mainSelect">
                <button className="select" type="button">❮</button>
                <button className="select" type="button">1</button>
                <button className="select" type="button">2</button>
                <button className="select" type="button">3</button>
                <button className="select" type="button">4</button>
                <button className="select" type="button">5</button>
                <button className="select" type="button">❯</button>
            </div>
        </form>
    );
}

export default TodoList;