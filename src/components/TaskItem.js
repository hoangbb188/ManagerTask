import React from "react";
function TaskItem(){

return(
    <div className="taskbtn task-item">
        <div className="taskbtn_left">
            
        <input type="checkbox"></input>
        <div className="task_title">this is a task</div>
        <button className="task_description" type="button">+</button>
        {/* <p className="duedate"></p> */}
        </div>
        <div className="taskbtn_right">
        <button type="button">Show Subtasks</button>
        <button type="button">action</button>
        <button type="button">delete</button>
        </div>
    </div>

)
}
export default TaskItem;