import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filtered, removeItem, editItem, changeStatus }) => {
    return (
        <div className="todoList">
            {filtered.map((todo) => (
                <div key={todo.id}>
                    <TodoItem
                        removeItem={removeItem}
                        todo={todo}
                        editItem={editItem}
                        changeStatus={changeStatus}
                    />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
