import React from 'react';

import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const taskNameInputRef = React.createRef();

  const addTaskHandler = (event) => {
    event.preventDefault();
    console.log('in add task handler');
    console.log('adding to task list: ' + taskName);
    // setTaskName('');
    taskNameInputRef.current.value = '';
    setTasks((prevTasks) => prevTasks.concat(taskName));
  };

  const inputChangeHandler = (event) => {
    console.log('in input change handler');
    console.log(event.target.value);
    setTaskName(event.target.value);
  };
  return (
    <>
      <AddTask ref={taskNameInputRef} taskName={taskName} inputChangeHandler={inputChangeHandler} addTaskHandler={addTaskHandler}/>
      <TaskList tasks={tasks} />
    </>
  );
};

export default App;
