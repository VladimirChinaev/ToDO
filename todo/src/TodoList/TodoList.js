import React from "react";
import StateButtons from "../TodoList/StateButtons";

const TodoList = (props) => {
    return (
        <div className="todoList">
            {props.filtered.map((todo) => (
                <div key={todo.uuid}>
                    <StateButtons
                        removeItem={props.removeItem}
                        todo={todo}
                        changeStatus={props.changeStatus}
                        getTodos={props.getTodos}
                        IndexOfLastTodo={props.IndexOfLastTodo}
                        indexOfFirstTodo={props.indexOfFirstTodo}
                    />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
