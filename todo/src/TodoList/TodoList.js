import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filtered, removeItem, changeStatus, IndexOfLastTodo, indexOfFirstTodo, editItem, getTodos }) => {
    return (
        <div className="todoList">
            {filtered.map((todo) => (
                <div key={todo.uuid}>
                    <TodoItem
                        removeItem={removeItem}
                        todo={todo}
                        changeStatus={changeStatus}
                        IndexOfLastTodo={IndexOfLastTodo}
                        indexOfFirstTodo={indexOfFirstTodo}
                        editItem={editItem}
                        getTodos={getTodos}
                    />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
