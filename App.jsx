import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SortDate from './mainInterface/SortDate';
import Title from './Title/Title';
import FilterStatus from './mainInterface/filterStatus';
import Input from './input/Input';
import Pagination from './pagination/Pagination';



const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("Undone");
  const [filtered, setFiltered] = useState(todos);

  useEffect(() => {
    let filteredTodos;
    if (filter === "All") {
      filteredTodos = todos;
    } else {
      filteredTodos = todos.filter(todos => todos.status === filter);
    }
    setFiltered(filteredTodos);
  }, [todos, filter])


  const handleChangeTodos = (e, name) => {
    e.preventDefault();
    const item = { id: uuidv4(), title: name, date: date(), status: "Undone" }
    setTodos([...todos, item]);
    setText("");
  }

  const todoFilter = (status) => {
    setFilter(status);
  }

  const date = () => {
    const date = new Date();
    return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }

  const changeStatus = (newStatus, id) => {
    const allTodos = todos;
    const todo = todos.find((todo) => todo.id === id)
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    todo.status = newStatus;
    allTodos[todoIndex] = todo;
    setTodos(allTodos);
  }

  return (
    <div>
      <Title />
      <div className="mainInput">
        <Input text={text} setText={setText} handleChangeTodos={handleChangeTodos} />
      </div>
      <div className="mainInterface">
        <FilterStatus todoFilter={setFilter} />
        <SortDate filtered={filtered} setFiltered={setFiltered} date={date} />
      </div>
      <div className="todoList">
        <TodoList todos={todos} setTodos={setTodos} text={text} setText={setText} handleChangeTodos={handleChangeTodos} filtered={filtered} todoFilter={todoFilter} changeStatus={changeStatus} setFiltered={setFiltered} />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
