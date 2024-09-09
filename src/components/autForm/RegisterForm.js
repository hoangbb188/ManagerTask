import React, { useState } from "react";
import "./authForm.css";
import {register} from "../api/auth";
function RegisterForm({ onClose, onLogin }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
      }
      try {
          const response = await register({ email, password });
          console.log("Registration successful", response.data);
          const id = response.data;
          onLogin(email, id);
          onClose();
      } catch (error) {
          alert("email was excited")
          console.error("Registration failed", error);
          setError(error.message); 
      }
  };

    return(
        <div className="autform register">
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
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
            <label>
              Confirm Password:
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Register</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      );

}
export default RegisterForm;