/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import "./Entry.style.css";
import { Login } from "../../components/login/login.comp";
import { Jumbotron } from "react-bootstrap";
import { ForgetPage } from "../../components/forget/Forget.comp";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForget, setShowForget] = useState("login");

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        "Invalid";
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please fill all fields");
      return;
    }
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setShowForget(formType);
  };

  return (
    <div className="entry bg-info ">
      <Jumbotron className="form-box">
        {showForget == "login" && (
          <Login
            handleOnChange={handleOnChange}
            email={email}
            password={password}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
          ></Login>
        )}

        {showForget == "reset" && (
          <ForgetPage
            handleOnChange={handleOnChange}
            email={email}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
          ></ForgetPage>
        )}
      </Jumbotron>
    </div>
  );
};
