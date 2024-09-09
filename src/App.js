import React, { useState} from "react";
import "./App.css";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import TaskHeader from "./components/TaskHeader";
import { getTasks } from "./components/api/task";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [tasks, setTasks] = useState([]);

  function reloadPage() {
    window.location.reload();
}
    const fetchTasks = async () => {
      if (userId) {  
        try {
          const response = await getTasks(userId); 
          setTasks(response.data);
        } catch (error) {
          console.error("Error fetching tasks", error);
        }
      }
    };

    fetchTasks();
  


  const handleLogin = (email,id) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserId(id);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setUserId(null);
    reloadPage();
  };
  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        userEmail={userEmail}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      <div className="container">
        <TaskHeader userId={userId} tasks={tasks} reload={fetchTasks}/>
        <ListTask tasks={tasks} reload={fetchTasks} />
      </div>
    </div>
  );
}

export default App;
