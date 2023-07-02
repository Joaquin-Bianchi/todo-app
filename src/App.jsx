import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
  return (
    // margin: 0;
    // display: flex;
    // justify-content: center;
    <main className="flex-col justify-center mx-auto">
      <h1 className="text-3xl text-zinc-700 mb-10">Tareas</h1>
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default App;
