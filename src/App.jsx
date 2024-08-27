import TasksProvider from "./providers/TasksProvider";
import AddTask from "./components/AddTask";
import ThemeComponent from './features/ThemeComponent'

const App = () => {
  return (
    <>
    <ThemeComponent />
    <TasksProvider>
      <div className="min-h-[400px] w-[80%] mx-auto bg-white dark:bg-black mt-[100px] rounded">
        <div>
          <h1 className="pt-[50px] text-center text-3xl uppercase font-bold dark:text-white">
            Todo App
          </h1>
          <AddTask />
        </div>
      </div>
    </TasksProvider>
    </>
    
  );
};

export default App;
