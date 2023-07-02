import { useState, useContext } from "react";

import { TaskContext } from "../context/TaskContext";

function TaskCard({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  const { DeleteTask } = useContext(TaskContext);
  const handleOnChange = () => {
    setIsChecked(!isChecked);

    // Si Is checked = false el clase name tiene que ser bg-roja y sino bg-verde {isChecked ? "bg-green-700 text-white" : "bg-gray-600"}
  };
  return (
    <>
      <div className="">
        <input
          onChange={handleOnChange}
          checked={isChecked}
          className=""
          type="checkbox"
        ></input>
        <label>{title}</label>

        <button onClick={() => DeleteTask(title)}>Eliminar</button>
      </div>
      <hr className="m-1"></hr>
    </>
  );
}

export default TaskCard;
{
  /* {tasksItems.map((task) => (
      <Task title={task.name} key={task.name} isChecked={task.done}></Task>
    ))} */
}

// Todavia faltan los estilos con condiciones  y las clases

// RFCE
// import React from 'react'

// function task() {
//   return (
//     <div>task</div>
//   )
// }

// export default task
