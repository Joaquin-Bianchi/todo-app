import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Title from "./components/Title.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <main>
        <Title></Title>
        <TaskForm></TaskForm>
        <TaskList />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
