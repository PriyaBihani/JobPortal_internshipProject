/* eslint-disable */

import React, { useEffect } from "react";
import "./css/Navbar.css";
import logo from "../../resources/JP-logo.PNG";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const elment = $(".hamburger")[0];
    const elment1 = document.querySelector(".nav-list");
    elment.addEventListener("click", () => {
      elment.classList.toggle("active");
      elment1.classList.toggle("active");
    });
  });
  return (
    <header className="container">
      <div className="container">
        <nav>
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Admin
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
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

export default Navbar;
