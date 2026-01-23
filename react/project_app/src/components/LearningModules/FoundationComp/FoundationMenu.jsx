import React from 'react';
import { NavLink, Outlet } from 'react-router';

function FoundationMenu() {
  return (
    <div className="container mt-4">
      <h1 className="fw-bold text-center mb-4">📚 Foundation of React</h1>

      {/* Layout */}
      <div className="row">
        
        {/* Sidebar */}
        <div className="col-md-4 col-lg-3 mb-4">
          <ul className="list-group list-unstyled nav-pills shadow-sm">
            <li><NavLink className="list-group-item list-group-item-action" to="intro">Introduction</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="jsx">JSX</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="compo">Components</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="props">Props</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="Usestate">State</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="event">Event Handling</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="conditional">Conditional Rendering</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="list">List & Keys</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="Form">Forms</NavLink></li>
            <li><NavLink className="list-group-item list-group-item-action" to="styling">Styling</NavLink></li>
          </ul>
        </div>

        {/* Content */}
        <div className="col-md-8 col-lg-9">
          <div className="card shadow p-4">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default FoundationMenu;
