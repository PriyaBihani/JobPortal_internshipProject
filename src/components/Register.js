/* eslint-disable */

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./css/Register.css";
import $ from "jquery";
import ExperienceForm from "./ExperienceForm";
import submitGif from "../resources/submitGIF.gif";

import { addProfile } from "../actions";

const Register = (props) => {
  const { user, addProfile } = props;
  const [imagePreview, setimagePreview] = useState("");
  const [experiences, setexperiences] = useState([]);
  const [pdf, setpdf] = useState("");
  const [name, setname] = useState("");
  const [jobProfile, setJobProfile] = useState("");
  const [ctc, setCtc] = useState("");
  const [expYears, setexpYears] = useState("");

  const handleImageInput = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    if (e.target.files.length !== 0) {
      reader.onload = () => {
        setimagePreview({
          file: file,
          imagePreviewUrl: reader.result,
        });
      };

      reader.readAsDataURL(file);
    } else {
    }
  };

  const handlePdf = (e) => {
    {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      if (e.target.files.length !== 0) {
        reader.onload = () => {
          setpdf(reader.result);
        };

        reader.readAsDataURL(file);
      } else {
      }
    }
  };

  const handleSubmit = (e) => {
    addProfile(user, {
      name,
      profileImage: imagePreview.imagePreviewUrl,
      jobProfile,
      ctc,
      expYears,
      experiences,
      pdf,
    });
    e.preventDefault();
    $("div.register-container>img").css("display", "block");
    setTimeout(() => {
      $("div.register-container>img").css("display", "none");
      <Redirect to="/profile" />;
    }, 4500);
  };

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="register-container">
      <img src={submitGif} alt="" />
      <div className="profile">
        <div className="profile-card">
          <form className="register-form">
            <div className="image-input">
              <div className="profile-card-image">
                <img src={imagePreview.imagePreviewUrl} alt="" />
              </div>

              {!imagePreview ? (
                <input
                  className="custom-file-input"
                  onChange={handleImageInput}
                  type="file"
                  name=""
                  id=""
                />
              ) : null}
            </div>
            <div className="profile-content">
              <div className="profile-card-name">
                <input
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  placeholder="Your Name"
                  className="name field"
                  type="text"
                />
              </div>
              <div className="profile-card-text">
                <input
                  onChange={(e) => {
                    setJobProfile(e.target.value);
                  }}
                  placeholder="Job Profile"
                  className="name field"
                  type="text"
                />
              </div>
            </div>
            <div className="profile-badges">
              <div>
                <div className="profile-badge">
                  <span className="key">Current ctc: </span>
                  <span className="value">
                    {" "}
                    <input
                      onChange={(e) => {
                        setCtc(e.target.value);
                      }}
                      placeholder="## lac"
                      type="text"
                      className="ctc-input"
                    />
                  </span>
                </div>
                <div className="profile-badge">
                  <span className="key"> Experience: </span>{" "}
                  <span className="value">
                    {" "}
                    <input
                      onChange={(e) => {
                        setexpYears(e.target.value);
                      }}
                      placeholder=""
                      type="number"
                      className="experience-input"
                    />{" "}
                    Yrs
                  </span>
                </div>
              </div>
            </div>
            <div className="experience-badges">
              <div className="profile-card-text text-center">Experiences </div>
              {experiences &&
                experiences.map((experience) => {
                  return (
                    <div key={experience.start} className="experience-badge">
                      <div className="company-name">
                        {experience.companyName}
                        <span className="small">
                          {experience.start} - {experience.end}
                        </span>
                      </div>
                      <div>{experience.description}</div>
                    </div>
                  );
                })}
              <ExperienceForm
                setexperiences={setexperiences}
                experiences={experiences}
              />
            </div>

            <div className="btn-resume input">
              Resume:
              {!pdf ? (
                <input
                  style={{ margin: "0px auto", display: "block" }}
                  onChange={handlePdf}
                  type="file"
                  name=""
                  id=""
                />
              ) : null}
              <span>{pdf ? "1 File selected" : ""}</span>
            </div>
            <div onClick={handleSubmit} className="btn-resume">
              Submit
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { addProfile })(Register);
