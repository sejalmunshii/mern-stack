import React from 'react'
import { NavLink, Outlet } from 'react-router';

function ConditonalMenu() {
 return (
    <div className="container">
      <h2 className="fw-bold mb-3">FormMenu Task</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="componentrender">componentrender</NavLink></li>
        <li><NavLink className="list-group-item" to="form">form</NavLink></li>
        <li><NavLink className="list-group-item" to="greeting">greeting</NavLink></li>
        <li><NavLink className="list-group-item" to="notification">notification</NavLink></li>
        <li><NavLink className="list-group-item" to="togglemode">togglemode</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default ConditonalMenu;
