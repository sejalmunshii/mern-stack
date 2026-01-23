import React from 'react'
import { NavLink, Outlet } from 'react-router';

function UseStateMenu() {
 return (
    <div className="container">
      <h2 className="fw-bold mb-3">UseState Task</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="color">color</NavLink></li>
        <li><NavLink className="list-group-item" to="counter">Counter</NavLink></li>
        <li><NavLink className="list-group-item" to="formtask">formtask</NavLink></li>
        <li><NavLink className="list-group-item" to="likebtn">Likebtn</NavLink></li>
        <li><NavLink className="list-group-item" to="mode">mode</NavLink></li>
        <li><NavLink className="list-group-item" to="showhide">showhide</NavLink></li>
        <li><NavLink className="list-group-item" to="slider">slider</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default UseStateMenu;
