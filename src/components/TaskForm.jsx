import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { IoIosAddCircle } from "react-icons/io";

function TaskForm() {
  const [newTitleTask, setNewTitleTask] = useState("");
  const { createTask } = useContext(TaskContext);

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
    <form onSubmit={handleSubmit} className="task-form">
      <input
        className="input-area"
        onChange={handleNameTask}
        value={newTitleTask}
        placeholder="Crear Una Nueva tarea"
        required
      />
      <div>
        <button className="create-task-btn">
          <IoIosAddCircle size={"30px"}></IoIosAddCircle>
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
