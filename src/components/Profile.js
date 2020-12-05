import React from "react";
import ViewPdf from "./ViewPdf";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-card-image">
          <img
            src="https://images.unsplash.com/photo-1521117660421-ce701ed42966?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="person"
          />
        </div>
        <div className="profile-content">
          <div className="profile-card-name">Priya Bihani</div>
          <div className="profile-card-text">Front end Developer</div>
        </div>
        <div className="profile-badges">
          <div className="profile-badge">
            <span className="key">Current ctc: </span>
            <span className="value"> 30%</span>
          </div>
          <div className="profile-badge">
            <span className="key">Years of Experience: </span>{" "}
            <span className="value"> 5 Yrs</span>
          </div>
        </div>
        <div className="experience-badges">
          <div className="profile-card-text text-center">Experiences</div>
          <div className="experience-badge">
            <div className="company-name">
              Netflix{" "}
              <span className="small">5 January 2018 - 29 December 2019</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              aliquam harum eaque voluptatibus voluptates cupiditate eveniet
              odio at in obcaecati?
            </div>
          </div>
          <div className="experience-badge">
            <div className="company-name">
              Facebook{" "}
              <span className="small">7 January 2016 - 29 December 2018</span>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              aliquam harum eaque voluptatibus voluptates cupiditate eveniet
              odio at in obcaecati?
            </div>
          </div>
        </div>

        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <ViewPdf />
          </div>
        </div>
        <div className="btn-resume">
          {" "}
          <button
            type="button"
            style={{ background: "transparent", border: "none", color: "#fff" }}
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
          >
            See Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
