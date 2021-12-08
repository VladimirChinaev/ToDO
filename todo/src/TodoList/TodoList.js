import React from 'react';
import StateButtons from "../TodoList/StateButtons"


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
                        getTodos={props.getTodos}
                        IndexOfLastTodo={props.IndexOfLastTodo}
                        indexOfFirstTodo={props.indexOfFirstTodo}
                    />
                </div>))
        }</div>
    );
}

export default TodoList;