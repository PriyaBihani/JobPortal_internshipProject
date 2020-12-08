/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import { login, signUp } from "../actions";

const SignIn = ({ users, login, loggedIn, role, signUp }) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    $(".btn").click(function () {
      $(".form-signin").toggleClass("form-signin-left");
      $(".form-signup").toggleClass("form-signup-left");
      $(".frame").toggleClass("frame-long");
      $(".signup-inactive").toggleClass("signup-active");
      $(".signin-active").toggleClass("signin-inactive");
      $(".forgot").toggleClass("forgot-left");
      $(this).removeClass("idle").addClass("active");
    });
  }, []);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    users.map((user) => {
      if (user.email === form.email && user.password === form.password) {
        login(user);
      }
      return null;
    });
    setForm({});
  };

  if (loggedIn) {
    return role === 0 ? <Redirect to="/register" /> : <Redirect to="/admin" />;
  }

  return (
    <div className="container signupandsignin">
      <div className="frame">
        <div className="nav">
          <ul className="links">
            <li className="signin-active">
              <a className="btn">Sign in</a>
            </li>
            <li className="signup-inactive">
              <a className="btn">Sign up </a>
            </li>
          </ul>
        </div>

        <div ng-app ng-init="checked = false">
          <form className="form-signin" name="form">
            <label htmlFor="email">Email</label>
            <input
              className="form-styling"
              type="text"
              name="email"
              placeholder=""
              onChange={handleForm}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-styling"
              type="text"
              name="password"
              placeholder=""
              onChange={handleForm}
            />
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              <span className="ui"></span>Keep me signed in
            </label>
            <div className="btn-animate">
              <a onClick={handleSubmit} className="btn-signin">
                Sign in
              </a>
            </div>
          </form>

          <form className="form-signup" name="form">
            <label htmlFor="fullname">Full name</label>
            <input
              onChange={handleForm}
              className="form-styling"
              type="text"
              name="fullname"
              placeholder=""
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={handleForm}
              className="form-styling"
              type="text"
              name="email"
              placeholder=""
            />
            <label htmlFor="password">Password</label>
            <input
              onChange={handleForm}
              className="form-styling"
              type="text"
              name="password"
              placeholder=""
            />
            <label htmlFor="confirmpassword">Confirm password</label>
            <input
              onChange={handleForm}
              className="form-styling"
              type="text"
              name="confirmpassword"
              placeholder=""
            />
            <a
              onClick={() => {
                signUp(form);
              }}
              ng-click="checked = !checked"
              className="btn-signup"
            >
              Sign Up
            </a>
          </form>
          <div className="forgot">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  loggedIn: state.loggedIn,
  role: state.role,
});

export default connect(mapStateToProps, { login, signUp })(SignIn);
