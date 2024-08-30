import React from "react";
import LoginForm from "./autForm/LoginForm";
import RegisterForm from "./autForm/RegisterForm";

function Header() {
  return (
    <div className="header_aut">
        <button className="btn login">Login</button>
        <button className="btn register">Register</button>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}
export default Header;
