import React from "react";

function TodoItem({ text, completed, toggleTask, handleEdit, handleDel }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={completed}
          onChange={toggleTask}
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {text}
        </span>
      </div>

      <div>
        <button className="btn btn-sm btn-info me-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDel}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
