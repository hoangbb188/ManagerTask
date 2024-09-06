import React, { useState } from "react";
import "./addForm.css";
import { createOrUpdateTask } from "../api/task";
function EditTaskForm({ onClose, userId, task }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedtask = {
      taskUuid: task.taskUuid,
      title,
      description,
      dueDate,
    };
    try {
      await createOrUpdateTask(editedtask);
      onClose();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_title">Edit task</h3>
        <button type="button" className="close_add_form" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="add-form_body">
        <form className="add-form_form" onSubmit={handleSubmit}>
          <p>Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <p>Details</p>
          <textarea
            className="add-form_details"
            rows="10"
            placeholder="Important details of your task..."
            autoComplete="off"
            maxLength="950"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>Due date</p>
          <input
            type="date"
            className="due_date"
            autoComplete="off"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button type="submit" className="submit_button">
            Save edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm;
