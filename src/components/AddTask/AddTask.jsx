import { forwardRef, useImperativeHandle } from "react";
import s from "./AddTask.module.css";
const AddTask = forwardRef((props, ref) => {
  return (
    <form className={s["add-task"]}>
      <label htmlFor="task-input">Task name</label>
      <input
        ref={ref}
        type="text"
        id="task-input"
        // value={props.taskName}
        // onChange={props.inputChangeHandler}
      ></input>
      <button onClick={props.addTaskHandler} type="submit">
        Add Task
      </button>
    </form>
  );
});

export default AddTask;
