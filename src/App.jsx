import { useState, useRef } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskNameInputRef = useRef(null);

  const addTaskHandler = (event) => {
    event.preventDefault();
    const task = taskNameInputRef.current.value;
    taskNameInputRef.current.value = "";
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <AddTask
        ref={taskNameInputRef}
        addTaskHandler={addTaskHandler}
      />
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
