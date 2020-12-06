import React, { useEffect } from "react";
import "./css/Navbar.css";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const elment = $(".hamburger")[0];
    console.log(elment);
    const elment1 = document.querySelector(".nav-list");

    elment.addEventListener("click", () => {
      elment.classList.toggle("active");
      elment1.classList.toggle("active");
    });
  });
  return (
    <header className="container">
      <div class="container">
        <nav>
          <a class="navbar-brand" href="#">
            {" "}
            <i class="icon ion-md-planet"> </i>
          </a>
          <ul class="nav-list">
            <li class="nav-item">
              <a class="nav-link" href="">
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Signup
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                Register
              </a>
            </li>
          </ul>
          <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
