import React, { useState, useEffect } from "react";
import "./To_Do_List.css"

export default function To_Do_List() {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("myTasks"));
        if (savedTasks) setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("myTasks", JSON.stringify(tasks));
    }, [tasks]);

    const btn = () => {
        if (!value.trim()) return;
        setTasks([...tasks, { text: value, completed: false }]);
        setValue("");
    };

    const del = (id) => {
        if (window.confirm("Delete task?")) {
            setTasks(tasks.filter((tasks, index) => index !== id));
        }
    };

    const toggleCheckbox = (id) => {
        const updated = tasks.map((task, index) =>
            index === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updated);

        setSelectAll(!updated.some(t => !t.completed));
    };

    const toggleSelectAll = () => {
        const newState = !selectAll;
        setSelectAll(newState);
        setTasks(tasks.map(t => ({ ...t, completed: newState })));
    };

    const startEdit = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index].text);
    };

    const saveEdit = () => {
        if (window.confirm("EDit Task??")) {
        setTasks(tasks.map((t, i) => i === editIndex ? { ...t, text: editValue } : t));
        setEditIndex(null);
        setEditValue("");
        }
    };

    const cancelEdit = () => {
        setEditIndex(null);
        setEditValue("");
    };

    return (
        <div className="container py-4">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: "900px", position: "relative" }}>
                <div className="card-body">

                    {editIndex !== null && (
                        <div className="modal-overlay">
                            <div className="modal-box">
                                <h4 className="fw-bold">Edit Task</h4>

                                <input
                                    type="text"
                                    className="form-control my-3"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />

                                <div className="text-end">
                                    <button className="btn btn-success mx-2" onClick={saveEdit}>
                                        Save
                                    </button>
                                    <button className="btn btn-secondary" onClick={cancelEdit}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <h3 className="text-center p-3">My Todo List</h3>

                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h5>Add Task</h5>
                        <input
                            type="text"
                            className="mx-3"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <button className="btn btn-success" onClick={btn}>Add</button>
                    </div>

                    {tasks.length > 0 && (
                        <div className="mb-3">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={selectAll}
                                onChange={toggleSelectAll}
                            />
                            <strong>Select All</strong>
                        </div>
                    )}

                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleCheckbox(index)}
                                />

                                <span className="fw-bold mx-3">Task:{index + 1}</span>

                                <span style={{
                                    textDecoration: task.completed ? "line-through" : "none",
                                    color: task.completed ? "gray" : "black"
                                }}>
                                    {task.text}
                                </span>

                                <div>
                                    <button className="btn btn-danger mx-2" onClick={() => del(index)}>Remove</button>
                                    <button className="btn btn-warning" onClick={() => startEdit(index)}>Edit</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    );
}
