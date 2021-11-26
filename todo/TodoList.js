import React from 'react';
import StateButtons from "../TodoList/StateButtons"
import { v4 as uuidv4 } from 'uuid';

const TodoList = (props) => {
    return (
        <div className="todoList">{
            props.filtered.map(todo => (
                <div key={uuidv4()}>
                    <StateButtons
                        removeItem={props.removeItem}
                        setTodos={props.setTodos}
                        todos={props.todos}
                        setText={props.setText}
                        text={props.text}
                        changeStatus={props.changeStatus}
                        todo={todo}
                        filtered={props.filtered}
                    />
                </div>))
        }</div>
    );
}

export default TodoList;