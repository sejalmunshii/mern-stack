import React from 'react'
import { NavLink, Outlet } from 'react-router';

function EventsMenu() {
 return (
    <div className="container">
      <h2 className="fw-bold mb-3">FormMenu Task</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="ageChecker">AgeChecker</NavLink></li>
        <li><NavLink className="list-group-item" to="btnClick">BtnClick</NavLink></li>
        <li><NavLink className="list-group-item" to="parameter">Parameter</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default EventsMenu;
