import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { getTasks, getAllTask } from "./api/task";
import CompletedTask from "./CompletedTask";

function ListTask({ userId }) {
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     if (userId) {  
  //       try {
  //         const response = await getTasks(userId); 
  //         setTasks(response.data);
  //       } catch (error) {
  //         console.error("Error fetching tasks", error);
  //       }
  //     }
  //   };

  //   fetchTasks();
  // }, [userId]);  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getAllTask(); 
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []); 

  return (
    <div className="task-content">
        <h3>{userId}</h3>
       {tasks
        .filter((task) => task.status === false)
        .map((task) => (
          <TaskItem key={task.taskId} task={task} />
        ))}
      <div className="end-content">
        <h3 className="end-title">Completed tasks</h3>
        <CompletedTask tasks={tasks}/>
      </div>
    </div>
  );
}

export default ListTask;