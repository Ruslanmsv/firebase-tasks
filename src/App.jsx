import { useState, useRef, useEffect } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskNameInputRef = useRef(null);

  const addTaskHandler = async (event) => {
    event.preventDefault();

    if (taskNameInputRef.current.value === "") {
      console.log("empty");
      return;
    }

    const postTasksDataToFirebase = async (task) => {
      const response = await fetch(
        "https://tasks-react-fc50e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        {
          body: JSON.stringify(task),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const body = await response.json();
      console.log(body);
      return body.name;
    };

    let task = {
      task_name: taskNameInputRef.current.value,
    };

    const task_id = await postTasksDataToFirebase(task);
    taskNameInputRef.current.value = "";
    task = { ...task, id: task_id };
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  useEffect(() => {
    const fetchFirebaseTasks = async () => {
      console.log("getting tasks from firebase tasks.json store");
      const response = await fetch(
        "https://tasks-react-fc50e-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );
      const data = await response.json();

      console.log("Tasks:");
      console.log(data);

      let fetchedTasks = [];
      for (let key in data) {
        fetchedTasks.push({
          task_id: key,
          task_name: data[key].task_name,
        });
      }

      setTasks(fetchedTasks);
    };

    fetchFirebaseTasks();
  }, []);

  return (
    <>
      <AddTask ref={taskNameInputRef} addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
