import React,{ useState } from "react";
import TaskItem from "./TaskItem";
import CompletedTask from "./CompletedTask";

function ListTask({tasks , reload}) {

  return (
    <div className="task-content">
       {tasks
        .filter((task) => task.status === false)
        .map((task) => (
          <TaskItem key={task.taskId} task={task} reload={reload}/>
        ))}
      <div className="end-content">
        <h3 className="end-title">Completed tasks</h3>
        <CompletedTask tasks={tasks} reload={reload}/>
      </div>
    </div>
  );
}

export default ListTask;