import React, { useState } from "react";
import TaskItem from "./TaskItem";
function CompletedTask({tasks}) {
    
  return (
    <div>
 {tasks
        .filter((task) => task.status === true)
        .map((task) => (
          <TaskItem key={task.taskId} task={task} />
        ))}
    </div>
  );
}

export default CompletedTask;
