import React from 'react';
import StateButtons from "../TodoList/StateButtons"
import { v4 as uuidv4 } from 'uuid';

const TodoList = (props) => {
    return (
        <div className="todoList">{
            props.filtered.slice(props.indexOfFirstTodo, props.IndexOfLastTodo).map(todo => (
                <div key={todo.uuid}>
                    <StateButtons
                        removeItem={props.removeItem}
                        todo={todo}
                        filtered={props.filtered}
                        changeStatus={props.changeStatus}
                    />
                </div>))
        }</div>
    );
}

export default TodoList;