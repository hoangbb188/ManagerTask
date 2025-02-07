import React, { useState, useEffect } from "react";
import { deleteTask, createOrUpdateTask } from "./api/task";
import EditTaskForm from "./addForm/EditTaskForm";
import ListSubTask from "./ListSubTask";
import { parseISO, isAfter, isBefore, startOfDay } from "date-fns";
function TaskItem({ task, reload }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isSubTasksVisible, setSubTasksVisible] = useState(false);
  const [compareDuedate, setCompareDuedate] = useState("today");

  useEffect(() => {
    if (task.dueDate) {
      compareDates(task.dueDate);
    }
  }, [task.dueDate]);

  const compareDates = (dateString) => {
    const inputDate = parseISO(dateString);
    const currentDate = startOfDay(new Date());
    if (isAfter(inputDate, currentDate)) {
      setCompareDuedate("after");
    } else if (isBefore(inputDate, currentDate)) {
      setCompareDuedate("before");
    } else {
      setCompareDuedate("today");
    }
  };

  const handleSubTasksShow = () => {
    setSubTasksVisible((prevState) => !prevState);
  };
  const handleDesciptionShow = () => {
    setDescriptionVisible((prevState) => !prevState);
  };
  const handleChangeStatus = async (e) => {
    e.preventDefault();
    const editedtask = {
      taskUuid: task.taskUuid,
      status: !task.status,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    };
    try {
      await createOrUpdateTask(editedtask);
      reload();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  const handleDelete = async (taskUuid) => {
    try {
      await deleteTask(taskUuid);
      reload();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };
  const handleEdit = () => {
    setShowEditForm(!showEditForm);
    reload();
  };
  const classNameDueDate = () => {
    if (!task.dueDate) {
      return "duedate_string";
    }

    const dueDateClasses = {
      today: "duedate_string today",
      before: "duedate_string before",
      after: "duedate_string after",
    };

    return dueDateClasses[compareDuedate] || "duedate_string";
  };

  return (
    <>
      <div className="taskbtn task-item ">
        <div className="taskbtn_left">
          <input
            type="checkbox"
            className="checkbox_task"
            checked={task.status}
            onClick={handleChangeStatus}
          />
          <div className={task.status ? "task_title title_done" : "task_title"}>
            {task.title}
          </div>
          <button
            className="task_description task_button"
            type="button"
            onClick={handleDesciptionShow}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </button>
        </div>
        <div className="taskbtn_right">
          <p className={classNameDueDate()}>
            {task.dueDate ? task.dueDate : "No Date"}
          </p>
          <button
            className="edit_task task_button"
            type="button"
            onClick={handleEdit}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,
            5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
              ></path>
            </svg>
          </button>
          <button
            className="delete_task task_button"
            type="button"
            onClick={() => handleDelete(task.taskUuid)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
            </svg>
          </button>
          <button
            className="show_subtask task_button"
            type="button"
            onClick={handleSubTasksShow}
          >
            <i class="fa-solid fa-bars button_icon"></i>
          </button>
        </div>
      </div>
      {isDescriptionVisible && (
        <div className="task_description_text">{task.description}</div>
      )}
      {showEditForm && <EditTaskForm onClose={handleEdit} task={task} />}
      {isSubTasksVisible && <ListSubTask taskUuid={task.taskUuid} />}
      {task.taskUuid}
    </>
  );
}

export default TaskItem;
