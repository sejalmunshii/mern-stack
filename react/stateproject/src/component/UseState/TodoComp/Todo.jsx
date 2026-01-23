import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks"));
    if (savedData) setTasks(savedData);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const updateTask = () => {
    if (task === "") return;
    setTasks(
      tasks.map((value, index) =>
        index === edit ? { ...value, text: task } : value
      )
    );
    setEdit(null);
    setTask("");
  };

  const handleDel = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setTask(tasks[index].text);
    setEdit(index);
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const filteredTasks = tasks.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true;
  });

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"> Todo </h2>

      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {edit === null ? (
          <button className="btn btn-primary" onClick={addTask}>
            Add Task
          </button>
        ) : (
          <button className="btn btn-success" onClick={updateTask}>
            Update
          </button>
        )}
      </div>

      <div className="mb-3">
        <button
          className={`btn btn-outline-secondary me-2 ${
            filter === "all" ? "active" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`btn btn-outline-success me-2 ${
            filter === "completed" ? "active" : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={`btn btn-outline-warning ${
            filter === "pending" ? "active" : ""
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>

      <ul className="list-group">
        {filteredTasks.map((value, index) => (
          <TodoItem
            key={index}
            text={value.text}
            completed={value.completed}
            handleDel={() => handleDel(index)}
            handleEdit={() => handleEdit(index)}
            toggleTask={() => toggleTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
