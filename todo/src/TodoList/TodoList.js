import StateButtons from "../TodoList/StateButtons"
import { v4 as uuidv4 } from 'uuid';



const TodoList = (props) => {
    let taskElements = props.filtered.map(e => <StateButtons removeItem={props.removeItem} setTodos={props.setTodos} todos={props.todos} setText={props.setText} text={props.text} changeStatus={props.changeStatus} todo={e} />)
    return (
        <div className="todoList">
            {taskElements.map((task) => {
                return (<div key={uuidv4()}>{task}</div>)
            })}
        </div>
    );
}

export default TodoList;