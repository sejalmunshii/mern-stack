import React from 'react'
import { NavLink, Outlet } from 'react-router';

function FormMenu() {
 return (
    <div className="container">
      <h2 className="fw-bold mb-3">FormMenu Task</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="task1">Task 1</NavLink></li>
        <li><NavLink className="list-group-item" to="task2">Task 2</NavLink></li>
        <li><NavLink className="list-group-item" to="task3-4">Task 3-4</NavLink></li>
        <li><NavLink className="list-group-item" to="task5">Task 5</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default FormMenu;
