import { tasksItems as data } from "../data/tasksItems";
import { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
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
    <TaskContext.Provider value={{ tasksItems, createTask, DeleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
