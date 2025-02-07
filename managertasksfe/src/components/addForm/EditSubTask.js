import React, { useState } from "react";
import "./addForm.css";
import { createOrUpdateSubTask } from "../api/subtask";

function EditSubTask({ subTask, onClose }) {
  const [title, setTitle] = useState(subTask.title);
  const [description, setDescription] = useState(subTask.description);
  const [dueDate, setDueDate] = useState(subTask.dueDate);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await createOrUpdateSubTask({
  //       title,
  //       description,
  //       dueDate,
  //       taskUuid: subTask.taskUuid,
  //     });
  //     onClose();
  //   } catch (err) {
  //     console.error("Error creating subtask", err);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editedtask = {
      subUuid: subTask.subUuid,
      title,
      description,
      dueDate,
    };
    try {
      await createOrUpdateSubTask(editedtask);
      onClose();
    } catch (err) {
      console.error("Error creating subtask", err);
    }
  };


  return (
    <div className="add-form">
      <div className="add-form_header">
        <h3 className="add-form_title">Edit Subtask</h3>
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
          <button type="submit" className="submit_button">Save edit</button>
        </form>
      </div>
    </div>
  );
}

export default EditSubTask;
