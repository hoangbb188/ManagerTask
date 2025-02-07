import React, { useState } from "react";
import "./addForm.css";
import { createOrUpdateSubTask } from "../api/subtask";

function AddSubTaskForm({ onClose , taskUuid }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true); 

    try {
      await createOrUpdateSubTask({
        title,
        description,
        dueDate,
        taskUuid: taskUuid
      });
      onClose(); 
    } catch (err) {
      console.error("Error creating subtask", err);
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_title">New Subtask</h3>
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
            placeholder="Enter subtask title"
          />
          <p>Details</p>
          <textarea
            className="add-form_details"
            rows="10"
            placeholder="Important details of your subtask..."
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
          <button
            type="submit"
            className="submit_button"
            disabled={isSubmitting || !title} 
          >
            {isSubmitting ? "Creating..." : "Create subtask"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddSubTaskForm;