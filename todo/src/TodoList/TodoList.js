import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ filtered, removeItem, editItem, changeStatus, setFiltered }) => {
    const [currentTodo, setCurrentTodo] = useState(null);

    const dragStartHandler = (e, todo) => {
        setCurrentTodo(todo);
    }

    const dragEndHandler = (todo) => {
        console.log("dragEnd:", todo);
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
    }

    const dropHandler = (e, todo) => {
        e.preventDefault();
        setFiltered(filtered.map(t => {
            if (t.id === todo.id) {
                return { ...t, order: currentTodo.order }
            }
            if (t.id === currentTodo.id) {
                return { ...t, order: todo.order }
            }
            return t;
        }))
    }

    const SortTodos = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }

    return (
        <div className="todoList">
            {filtered.sort(SortTodos).map((todo) => {
                return (
                    <div
                        key={todo.id}
                        onDragStart={(e) => { dragStartHandler(e, todo) }}
                        onDragLeave={(e) => { dragEndHandler(e) }}
                        onDragEnd={(e) => { dragEndHandler(e) }}
                        onDragOver={(e) => { dragOverHandler(e) }}
                        onDrop={(e) => { dropHandler(e, todo) }}
                        draggable={true}>
                        <TodoItem
                            removeItem={removeItem}
                            todo={todo}
                            editItem={editItem}
                            changeStatus={changeStatus}
                            setFiltered={setFiltered}
                        />
                    </div>
                )
            })
            }
        </div >
    );
};

export default TodoList;
