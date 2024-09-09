import React, { useState } from "react";
import { createOrUpdateSubTask, deleteSubTaskBySubUuid } from "./api/subtask";
import EditSubTask from "./addForm/EditSubTask";

function SubTaskItem({ subTask, reload }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const handleDesciptionShow = () => {
    setDescriptionVisible((prevState) => !prevState);
  };
  const handleChangeStatus = async (e) => {
    e.preventDefault();
    const editedtask = {
      subUuid: subTask.subUuid,
      status: !subTask.status,
      title: subTask.title,
      description: subTask.description,
      dueDate: subTask.dueDate,
      taskUuid: subTask.taskUuid,
    };
    try {
      await createOrUpdateSubTask(editedtask);
      reload();
    } catch (err) {
      console.error("Error creating subtask", err);
    }
  };

  const handleDelete = async (subUuid) => {
    try {
      await deleteSubTaskBySubUuid(subUuid);
      reload();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleEdit = () => {
    setShowEditForm(!showEditForm);
    reload();
  };

  return (
    <>
      <div className="taskbtn task-item subtask-item">
        <div className="taskbtn_left">
          <input
            type="checkbox"
            className="checkbox_task"
            checked={subTask.status}
            onClick={handleChangeStatus}
          />
          <div className={subTask.status ? 'task_title title_done' : 'task_title'}>{subTask.title}</div>
          <button className="task_description task_button subtask_button" onClick={handleDesciptionShow}>
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </button>
        </div>
        <div className="taskbtn_right">
          <div className="duedate_string">{subTask.dueDate}</div>
          <button
            className="edit_task task_button subtask_button"
            type="button"
            onClick={handleEdit}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path>
            </svg>
          </button>
          <button
            className="delete_task task_button subtask_button"
            type="button"
            onClick={() => handleDelete(subTask.subUuid)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
            </svg>
          </button>
        </div>
      </div>{" "}
      {isDescriptionVisible && (
        <div className="task_description_text">{subTask.description}</div>
      )}
       {showEditForm&&<EditSubTask onClose={handleEdit} subTask={subTask}/>}
    </>
  );
}

export default SubTaskItem;
