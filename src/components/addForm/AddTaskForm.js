import React, { useState } from "react";
import "./addForm.css";

function AddTaskForm({onClose}) {
  

  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_title">New task</h3>
        <button type="button" className="close_add_form" onClick={onClose}>
        <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="add-form_body">
        <form className="add-form_form">
          <p>Title</p>
          <input required />
          <p>Details</p>
          <textarea
            className="add-form_details"
            rows="10"
            placeholder="Important details of your task..."
            autocomplete="off"
            maxlength="950"
          ></textarea>
          <p>Due date</p>
          <input type="date" className="due_date" autoComplete="off" />
          <button type="submit" className="submit_button">Create task</button>
        </form>
      </div>
    </div>
  );
}
export default AddTaskForm;
