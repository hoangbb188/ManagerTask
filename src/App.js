import React, { useState,useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ListTask from "./components/ListTask";
import TaskHeader from "./components/TaskHeader";
// import { getHello } from "./components/api/task";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("1");
  const [helloMessage, setHelloMessage] = useState("");

  // useEffect(() => {
  //   const fetchHelloMessage = async () => {
  //     try {
  //       const response = await getHello();
  //       setHelloMessage(response.data); // Giả sử API trả về chuỗi trong response.data
  //     } catch (error) {
  //       console.error("Error fetching hello message:", error);
  //     }
  //   };
    
  //   fetchHelloMessage();
  // }, []);
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
        <TaskHeader userId={userId}/>
        <ListTask userId={userId} />
      </div>
    </div>
  );
}

export default App;
