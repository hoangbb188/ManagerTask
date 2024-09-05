import React from "react";
function TaskItem() {
  return (
    <div className="taskbtn task-item">
      <div className="taskbtn_left">
        <input type="checkbox" className="checkbox_task"></input>
        <div className="task_title">this is a task</div>
        <button
          className="task_description"
          type="button"
          aria-label="Show task details"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
          </svg>
        </button>

        {/* <p className="duedate"></p> */}
      </div>
      <div className="taskbtn_right">
        <button type="button">Show Subtasks</button>
        <button type="button">action</button>
        <button type="button">delete</button>
      </div>
    </div>
  );
}
export default TaskItem;
