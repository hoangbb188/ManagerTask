import React, { useState } from "react";
import "./authForm.css";
import { login } from "../api/auth";

function LoginForm({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password })
      .then((response) => {
        if (response.status === 200) {
          console.log("Login successful", response.data);
          const id = response.data; // Capture userid here
          onLogin(email, id); // Pass userid to the login handler
          onClose();
        } else {
          console.error("Login failed", response.statusText);
          alert("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
        alert("Login failed");
      });
  };
  return (
    <div className="autform login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
