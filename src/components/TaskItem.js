import React, { useState } from "react";
import { deleteTask} from "./api/task"; 

function TaskItem({ task }) { 
  

  const handleDelete = async (id) => {
    try {
      await deleteTask(id); 
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };
  const handleEdit = () => {
    console.log("Edit task", task.id);
  }

  return (
    <div className="taskbtn task-item ">
      <div className="taskbtn_left">
        <input
          type="checkbox"
          className="checkbox_task"  
          checked={task.status}
        />
        <div className="task_title">{task.title}</div>
        <button className="task_description task_button" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
          </svg>
        </button>
      </div>
      <div className="taskbtn_right">
        <button className="edit_task task_button" type="button" onClick={handleEdit}>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,
            5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path>
          </svg>
        </button>
        <button className="delete_task task_button" type="button" onClick={() => handleDelete(task.id)}>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;