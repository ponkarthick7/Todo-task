// Todo.js

import React, { useState } from 'react';
import './Todo.css'; // Import the external CSS file

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [status, setStatus] = useState(todo.status);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    onUpdate(todo.id, { ...todo, status: newStatus });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(todo.id, { ...todo, description: editedDescription });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedDescription(todo.description);
  };

  return (
    <div className="todo-card" id={`todo-${todo.id}`}>
      <h3 className="todo-task">Name:{todo.taskName}</h3>
      {isEditing ? (
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      ) : (
        <p className="todo-description">Description:{todo.description}</p>
      )}
      <p className="todo-status">Status: {status}</p>
      <div className="todo-buttons">
        {isEditing ? (
          <>
            <button className="todo-toggle" onClick={handleSaveClick}>
              Save
            </button>
            <button className="todo-delete" onClick={handleCancelClick}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <div className="dropdown">
              <button className="todo-toggle">Status</button>
              <div className="dropdown-content">
                <button onClick={() => handleStatusChange('completed')} style={{ backgroundColor: ' rgb(49, 181, 150)' }}>Completed</button>
                <button onClick={() => handleStatusChange('not completed')} style={{ backgroundColor: ' rgb(245, 67, 54)' }}>Not Completed</button>
              </div>
            </div>
            <button className="todo-delete" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
            <button className="todo-edit" onClick={handleEditClick}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
