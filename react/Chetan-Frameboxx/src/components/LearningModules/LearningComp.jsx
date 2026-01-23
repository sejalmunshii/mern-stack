import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function LearningComp() {
  return (
    <div className="container mt-4">
      <h1 className="text-center fw-bold mb-4">🚀 Learning React</h1>

      <div className="d-flex justify-content-center mb-4">
        <ul className="nav nav-pills gap-2">
          <li className="nav-item">
            <NavLink className="nav-link" to="foundation">React Foundation</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="router">React Router</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="hooks">React Hooks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="redux">React Redux</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="firebase">React Firebase</NavLink>
          </li>
        </ul>
      </div>

      <div className="card shadow p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default LearningComp;
