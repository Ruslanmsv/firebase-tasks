import Task from "./Task";
import s from "./TaskList.module.css";

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        console.log('printing task');
        console.log(task);
        return <Task key={task.task_id} name={task.task_name} />;
      })}
    </ul>
  );
};

export default TaskList;
