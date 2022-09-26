import Task from "./Task";
import s from './TaskList.module.css';

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task, i) => (
        <Task key={i} task={task}/>
      ))}
    </ul>
  );
};

export default TaskList;
