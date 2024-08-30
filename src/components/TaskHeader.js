import React from "react";

function TaskHeader(){
    return (
        <div className="task-header">
            <h3 className="title">HOME</h3>
            <button type="button"><i class="fa-solid fa-plus"></i>Add new task</button>
        </div>
    )
}
export default TaskHeader;