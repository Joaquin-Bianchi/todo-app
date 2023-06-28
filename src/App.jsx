import { useEffect, useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { tasksItems as data } from "./components/tasksItems";

function App() {
  const [tasksItems, setNewtasksItems] = useState([]);
  useEffect(() => {
    setNewtasksItems(data);
  }, []);

  function createTask(newTask) {
    const isNameDuplicate = tasksItems.some(
      (task) => task.name.toLowerCase() === newTask.name.toLowerCase()
    );

    if (isNameDuplicate) {
      alert(`${newTask.name} is already added`);
    } else setNewtasksItems([...tasksItems, newTask]);
  }
  function DeleteTask(taskName) {
    setNewtasksItems(tasksItems.filter((task) => task.name !== taskName));
  }
  return (
    <main>
      <h1>Tareas</h1>
      <TaskForm createTask={createTask} />
      <TaskList tasksItems={tasksItems} DeleteTask={DeleteTask} />
    </main>
  );
}

export default App;
