import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
const TaskList = () => {
  const { tasksItems, DeleteTask } = useContext(TaskContext);
  return (
    <>
      {tasksItems.map((task) => (
        <TaskCard
          title={task.name}
          key={task.name}
          isChecked={task.done}
          DeleteTask={DeleteTask}
        ></TaskCard>
      ))}
    </>
  );
};

export default TaskList;
