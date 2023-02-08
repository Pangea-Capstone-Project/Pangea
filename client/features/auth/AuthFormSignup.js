import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../../app/store";
import "./auth.css";
import pangeaLogo from "../../../public/pangeaLogo.png";
/**
  The AuthForm component can be used for Login or Sign Up.
  Props for Login: name="login", displayName="Login"
  Props for Sign up: name="signup", displayName="Sign Up"
**/

const AuthForm = ({ name, displayName }) => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const role = evt.target.role.value;

    if (!username || !password) {
      alert("Please fill out all fields");
      return;
    }

    dispatch(authenticate({ username, password, role, method: formName }));
    if (role === "landlord") {
      navigate("/dashboard");
    } else if (role === "tenant") {
      navigate("/signup-tenant");
    }
  };

  return (
    <div id="home">
      <div id="logoContainer">
        <img src={pangeaLogo} alt="Pangea Logo" id="pangeaLogo" />
      </div>
      <form id="loginForm" onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <medium>Username</medium>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <medium>Password</medium>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <label htmlFor="role">
            <medium>Role</medium>
          </label>
          <select name="role">
            <option value="tenant">Tenant</option>
            <option value="landlord">Landlord</option>
          </select>
        </div>
        <div id="loginDiv">
          <button className="loginBtns" type="submit">
            Sign Up
          </button>
        </div>
        <div>
          Already on Pangea?
          <a href="/login" class="sign-in-link">Sign In</a>
        </div>
        {error && <div> {error} </div>}
      </form>
    </div>
  );
};

export default AuthForm;
