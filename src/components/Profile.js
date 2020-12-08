import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ViewPdf from "./ViewPdf";

const Profile = ({ user, profiles }) => {
  if (!user) {
    return <Redirect to="/" />;
  }
  const userId = user.id;
  const hasProfile =
    profiles &&
    profiles.some((profile) => {
      return profile.id === userId;
    });

  if (!hasProfile) {
    return <Redirect to="/register" />;
  }
  return (
    <div className="profile">
      {profiles &&
        profiles.map((profile) => {
          if (profile.id === userId) {
            return (
              <div className="profile-card">
                <div className="profile-card-image">
                  <img src={profile.profileImage} alt="person" />
                </div>
                <div className="profile-content">
                  <div className="profile-card-name">{profile.name}</div>
                  <div className="profile-card-text">{profile.jobProfile}</div>
                </div>
                <div className="profile-badges">
                  <div className="profile-badge">
                    <span className="key">Current ctc: </span>
                    <span className="value"> {profile.ctc} lacs</span>
                  </div>
                  <div className="profile-badge">
                    <span className="key">Years of Experience: </span>{" "}
                    <span className="value"> {profile.expYears} Yrs</span>
                  </div>
                </div>
                <div className="experience-badges">
                  <div className="profile-card-text text-center">
                    Experiences
                  </div>
                  {profile.experiences &&
                    profile.experiences.map((exp) => {
                      return (
                        <div className="experience-badge">
                          <div className="company-name">
                            {exp.companyName}
                            <span className="small">
                              {exp.start} - {exp.end}
                            </span>
                          </div>
                          <div>{exp.description}</div>
                        </div>
                      );
                    })}
                </div>

                <div
                  class="modal fade bd-example-modal-lg"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <ViewPdf data={profile.pdf} />
                  </div>
                </div>
                <div className="btn-resume">
                  {" "}
                  <button
                    type="button"
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                    }}
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    See Resume
                  </button>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  profiles: state.profiles,
});

export default connect(mapStateToProps)(Profile);
