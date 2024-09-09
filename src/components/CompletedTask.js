import React, { useState } from "react";
import TaskItem from "./TaskItem";
function CompletedTask({tasks,reload}) {
    
  return (
    <div>
 {tasks
        .filter((task) => task.status === true)
        .map((task) => (
          <TaskItem key={task.taskId} task={task} reload={reload}/>
        ))}
    </div>
  );
}

export default CompletedTask;
