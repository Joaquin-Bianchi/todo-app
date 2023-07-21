import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasksItems, DeleteTask } = useContext(TaskContext);

  if (tasksItems.length === 0) {
    return (
      <div className="no-task-alert">
        <p>Aun No hay Tareas!!</p>
        <img className="ilustracion-task" src="/src/assets/not fund.svg"></img>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasksItems.map((task) => (
        <TaskCard
          title={task.name}
          key={task.name}
          isChecked={task.done}
          DeleteTask={DeleteTask}
        ></TaskCard>
      ))}
    </ul>
  );
};

export default TaskList;
