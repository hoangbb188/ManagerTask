import React, { useState } from "react";
import LoginForm from "./autForm/LoginForm";
import RegisterForm from "./autForm/RegisterForm";
import "./Header.css";

function Header({ isLoggedIn, userEmail, onLogin, onLogout }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleRegisterClose = () => setShowRegister(false);

  return (
    <div>
      <div className="header_aut">
        {!isLoggedIn ? (
          <>
            <button className="menubtn log" onClick={() => setShowLogin(true)}>
              Login
            </button>
            <button
              className="menubtn reg"
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </>
        ) : (
          <>
            <div className="header_logout">
              <p>Welcome, {userEmail}</p>
              <button className="menubtn logout" onClick={onLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </div>
      {showLogin && <LoginForm onClose={handleLoginClose} onLogin={onLogin} />}
      {showRegister && (
        <RegisterForm onClose={handleRegisterClose} onLogin={onLogin} />
      )}
    </div>
  );
}
export default Header;
