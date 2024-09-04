import React, { useState } from "react";
import "./authForm.css";
import {register} from "../api/auth";
function RegisterForm({ onClose, onLogin }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        register({ email, password })
          .then((response) => {
            console.log("Registration successful", response.data);
            onLogin(email); 
            onClose();
          })
          .catch((error) => {
            console.error("Registration failed", error);
            alert("Registration failed");
          });
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