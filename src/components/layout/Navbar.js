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
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                videos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                competences
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                contacts
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
