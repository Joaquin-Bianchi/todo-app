import React from "react";
import { useState } from "react";

function TaskForm({ createTask }) {
  const [newTitleTask, setNewTitleTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = { name: newTitleTask, done: false };
    createTask(newTask);

    setNewTitleTask("");
  };
  const handleNameTask = (event) => {
    setNewTitleTask(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="lista-tareas">
      <input
        onChange={handleNameTask}
        value={newTitleTask}
        type="text"
        placeholder="Crear Una Nueva tarea"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
