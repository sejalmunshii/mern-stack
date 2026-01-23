import React, { useState } from "react";

export default function TodoList() {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const inputHandler = (e) => {
        setValue(e.target.value);
    };

    const btn = () => {
        if(value.trim() === "") return;
        setTasks([...tasks, value]);
        setValue("");
    };

    const del = (id) => {
        setTasks(tasks.filter((task, index) => index !== id));
    };

    return (
        <div className="container py-4">
            <div className="card shadow-sm mx-auto" style={{ maxWidth: "900px" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3>My Todo List</h3>
                        <input
                            type="text"
                            className="mx-3"
                            value={value}
                            onChange={inputHandler}
                        />
                        <button className="btn btn-success" onClick={btn}>Add</button>
                    </div>

                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                {task}
                                <button
                                    className="btn btn-danger"
                                    onClick={() => del(index)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
