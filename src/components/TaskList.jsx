import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasksItems, DeleteTask }) => {
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
