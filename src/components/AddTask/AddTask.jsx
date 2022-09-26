import React from 'react';
import s from './AddTask.module.css';
const AddTask = (props) => {
  return (
    <form className={s["add-task"]}>
      <label htmlFor="task-input">Task name</label>
      <input ref={props.tasnNameInputRef} type="text" id="task-input" value={props.taskName} onChange={props.inputChangeHandler}></input>
      <button onClick={props.addTaskHandler} type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
