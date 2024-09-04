import React from "react";
import AddTaskForm from "./addForm/AddTaskForm";
function TaskHeader(){

    return (
        <div className="task-header">
            <h3 className="title">HOME</h3>
            <button type="button" className="taskbtn add" onClick={()=><AddTaskForm/>}><i class="fa-solid fa-plus"></i>Add new task</button>
        </div>
    )
}
export default TaskHeader;