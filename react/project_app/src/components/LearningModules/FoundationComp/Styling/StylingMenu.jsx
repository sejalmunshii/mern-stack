import React from 'react'
import { NavLink, Outlet } from 'react-router'

function StylingMenu() {
  return (
    <>
     <div className="container">
      <h2 className="fw-bold mb-3">FormMenu Task</h2>

      <ul className="list-group list-unstyled  mb-4">
        <li><NavLink className="list-group-item" to="styling_Task1">Task 1</NavLink></li>
        <li><NavLink className="list-group-item" to="styling_Task2">Task 2</NavLink></li>
        <li><NavLink className="list-group-item" to="styling_Task3">Task 3</NavLink></li>
      </ul>

      <div className="card shadow p-3">
        <Outlet />
      </div>
    </div>
    </>
  )
}

export default StylingMenu;