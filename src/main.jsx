import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/reset.css";
import "./index.css";
import { TaskContext, TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
