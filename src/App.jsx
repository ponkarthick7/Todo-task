// App.js

import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [newTodo, setNewTodo] = useState({ taskName: '', description: '', status: 'not completed' });

  const addTodo = () => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
    setNewTodo({ taskName: '', description: '', status: 'not completed' });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const filterTodos = () => {
    if (filterStatus === 'all') {
      return todos;
    } else {
      return todos.filter((todo) => todo.status === filterStatus);
    }
  };

// App.js
// App.js
return (
  <div className="app-container">
    <h1 className="app-title">Todo App</h1>
    <div className="input-row">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task name"
          value={newTodo.taskName}
          onChange={(e) => setNewTodo({ ...newTodo, taskName: e.target.value })}
          style={{ backgroundColor: ' White' ,color:'black'}}
          required
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
          style={{ backgroundColor: ' White',color:'black' }}
        />
      </div>
      <div className="input-container" id='Add_Todo'>
        <button onClick={addTodo} style={{ backgroundColor: ' rgb(49, 181, 150)' ,color:'black'}}>Add Todo</button>
      </div>
    </div>
    <div className="Filter">
        <div className="left-content">
          <h4>My Todos</h4>
        </div>
        <div className="right-content">
          <h4>Filter Status:</h4>
          <select onChange={(e) => setFilterStatus(e.target.value)}
          style={{ backgroundColor: ' rgb(245, 67, 54)' }}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
            
          </select>
        </div>
      </div>

    <div className="todo-cards-container">
      {filterTodos().map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />
      ))}
    </div>
  </div>
);



};

export default App;
