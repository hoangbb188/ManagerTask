import React from "react";
import TaskItem from "./TaskItem";
function ListTask() {
  return (
    <div className="task-content">
      <TaskItem />
      <div className="end-content">
        <h3 className="end-title">Completed tasks</h3>

      </div>
    </div>
  );
}

export default ListTask;
