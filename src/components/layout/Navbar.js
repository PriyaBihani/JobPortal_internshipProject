/* eslint-disable */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../../resources/JP-logo.PNG";
import $ from "jquery";

import { logout } from "../../actions";

const Navbar = (props) => {
  const { logout, history, user } = props;
  const role = user && user.role;
  useEffect(() => {
    const elment = $(".hamburger")[0];
    const elment1 = document.querySelector(".nav-list");
    elment.addEventListener("click", () => {
      elment.classList.toggle("active");
      elment1.classList.toggle("active");
    });
  }, []);
  return (
    <header className="container">
      <div className="container">
        <nav>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          {role === 1 ? (
            <ul className="nav-list">
              <Link className="nav-item">
                <a className="nav-link" to="/admin">
                  Admin
                </a>
              </Link>

              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="">
                  home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Navbar);
