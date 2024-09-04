import React, { useState } from "react";
import "./addForm.css";

function AddTaskForm() {
  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_header">New task</h3>
        <button type="button" className="close_add_form">
          X
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
          <button type="submit">Create task</button>
        </form>
      </div>
    </div>
  );
}
export default AddTaskForm;
