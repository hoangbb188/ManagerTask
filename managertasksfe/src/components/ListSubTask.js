import React, { useEffect, useState } from "react";
import SubTaskItem from "./SubTaskItem";
import { getSubTaskByTaskUuid, createOrUpdateSubTask, deleteSubTaskBySubUuid } from "./api/subtask";
import AddSubTaskForm from "./addForm/AddSubTaskForm";

function ListSubTask({ taskUuid }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [subTasks, setSubTasks] = useState([]);

  
  const fetchSubTasks = async () => {
    try {
      const response = await getSubTaskByTaskUuid(taskUuid);
      setSubTasks(response.data);
    } catch (error) {
      console.error("Error fetching subtasks", error);
    }
  };
  
  useEffect(() => {
    fetchSubTasks();
  }, [taskUuid]);
  
  const handleShowForm = () => {
    setFormVisible(!isFormVisible);
    fetchSubTasks(); 
  };
  const handleEditSubTask = async (subTaskUuid, updatedSubTask) => {
    try {
      await createOrUpdateSubTask(updatedSubTask);
      fetchSubTasks(); 
    } catch (error) {
      console.error("Error updating subtask", error);
    }
  };

  const handleDeleteSubTask = async (subTaskUuid) => {
    try {
      await deleteSubTaskBySubUuid(subTaskUuid);
      fetchSubTasks(); 
    } catch (error) {
      console.error("Error deleting subtask", error);
    }
  };

  return (
    <div className="task-content subtask-content">
      <button className="add_subtask_button" onClick={handleShowForm} >Add Subtask</button>
      {isFormVisible && <AddSubTaskForm onClose={handleShowForm} taskUuid= {taskUuid}/>}
      {subTasks.map((subTask) => (
        <SubTaskItem
          key={subTask.subTaskUuid}
          subTask={subTask}
          onEdit={handleEditSubTask}
          onDelete={handleDeleteSubTask}
          reload={fetchSubTasks}
        />
      ))}
    </div>
  );
}

export default ListSubTask;