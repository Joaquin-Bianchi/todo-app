import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "./Styles/Checkbox.css";
import { FaTrash } from "react-icons/fa";
function TaskCard({ title }) {
  const [isChecked, setIsChecked] = useState(false);
  const { DeleteTask } = useContext(TaskContext);
  const handleOnChange = () => {
    setIsChecked(!isChecked);

    // Si Is checked = false el clase name tiene que ser diferente
  };
  return (
    <>
      <li className={`${"task-item"} ${isChecked ? "task-item-complete" : ""}`}>
        {/* <input 
          onChange={handleOnChange}
          checked={isChecked}
          color="success"
          type="checkbox"
        /> */}
        <label className="container">
          <input
            type="checkbox"
            onChange={handleOnChange}
            checked={isChecked}
          />
          <div className="checkmark"></div>
        </label>
        <p className={isChecked ? "title-task-complete" : ""}>{title}</p>

        <button onClick={() => DeleteTask(title)} className="delete-task-btn">
          <FaTrash size={"20px"}></FaTrash>
        </button>
      </li>
    </>
  );
}

export default TaskCard;
