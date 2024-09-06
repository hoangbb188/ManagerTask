import React, { useState } from "react";
import AddTaskForm from "./addForm/AddTaskForm";

function TaskHeader({userId}) {
    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="task-header">
            <h3 className="title">HOME</h3>
            <button 
                type="button" 
                className="taskbtn add" 
                onClick={handleButtonClick}
            >
                <i className="fa-solid fa-plus"></i>
                Add new task
            </button>
            {showForm && <AddTaskForm onClose={handleButtonClick}  userId={userId}/>}
        </div>
    );
}

export default TaskHeader;