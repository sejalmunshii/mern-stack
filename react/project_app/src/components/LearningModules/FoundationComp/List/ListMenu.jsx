import React from "react";
import { NavLink, Outlet } from "react-router";

function ListMenu() {
  return (
    <div className="container">
      <h2 className="fw-bold mb-3">📌 List & Keys Module</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="name">Name Example</NavLink></li>
        <li><NavLink className="list-group-item" to="todo">Todo List</NavLink></li>
        <li><NavLink className="list-group-item" to="uniquekey">Unique Keys</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
  );
}

export default ListMenu;
