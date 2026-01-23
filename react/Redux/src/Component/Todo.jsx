import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setInput,
  addTask,
  deleteTask,
  startEdit,
  updateTask,
} from "../features/todo/TodoSlice";

function Todo() {
  const { input, arr, editIndex } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="container py-4">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "900px" }}>
        <div className="card-body">

          <div className="d-flex mb-3">
            <h3 className="me-3">My Todo List</h3>

            <input
              type="text"
              className="form-control me-2"
              value={input}
              onChange={(e) => dispatch(setInput(e.target.value))}
            />

            {editIndex === null ? (
              <button
                className="btn btn-success"
                onClick={() => dispatch(addTask())}
              >
                Add
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() => dispatch(updateTask())}
              >
                Update
              </button>
            )}
          </div>

          <ul className="list-group">
            {arr.map((task, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {task}

                <div>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => dispatch(startEdit(index))}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteTask(index))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Todo;
