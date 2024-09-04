import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import TaskHeader from "./components/TaskHeader";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const handleLogin = (email,id) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setUserId(id);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
    setUserId(null);
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
        <TaskHeader />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
