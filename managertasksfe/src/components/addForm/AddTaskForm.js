import React, { useState } from "react";
import "./addForm.css";
import {createOrUpdateTask} from "../api/task";
function AddTaskForm({onClose,userId}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task= {
      title,
      description,
      dueDate,
      user:{"userid":userId}
    };
    try {
      await createOrUpdateTask(task);
      onClose(); 
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_title">New task</h3>
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
          <button type="submit" className="submit_button" disabled={ !title|| !description} >Create task</button>
        </form>
      </div>
    </div>
  );
}

export default AddTaskForm;
