import React from "react";
function TaskItem(){

return(
    <div className="task-item">
        <input type="checkbox"></input>
        <div className="task_title">this is a task</div>
        <button className="task_description" type="button">+</button>
        <p className="duedate"></p>
        <button type="button">Show Subtasks</button>
        <button type="button">action</button>
        <button type="button">delete</button>
    </div>

)
}
export default TaskItem;