import { useState } from "react";
import { Task } from "./components/task";

function App() {
  // const [persons, setPersons] = useState([props.person]);
  const [newTitleTask, setNewTitleTask] = useState("");
  const [tasksItems, setNewtasksItems] = useState([
    { name: "Primer Tarea", done: true },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameDuplicate = tasksItems.some(
      (task) => task.name.toLowerCase() === newTitleTask.toLowerCase()
    );

    if (isNameDuplicate) {
      alert(` ${newTitleTask} is already added`);
    } else {
      const newTask = { name: newTitleTask };
      setNewtasksItems([...tasksItems, newTask]);
    }

    setNewTitleTask("");
  };
  const handleNameTask = (event) => {
    setNewTitleTask(event.target.value);
  };
  return (
    <main>
      <h1>Tareas</h1>
      <form onSubmit={handleSubmit} className="lista-tareas">
        <input
          onChange={handleNameTask}
          value={newTitleTask}
          type="text"
          placeholder="Crear Una Nueva tarea"
        />
        <button type="submit">Add</button>
        {tasksItems.map((task) => (
          <Task title={task.name} key={task.name}></Task>
        ))}
      </form>
    </main>
  );
}

export default App;
