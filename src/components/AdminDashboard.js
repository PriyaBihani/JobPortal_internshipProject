import React, { useState } from "react";
import { connect } from "react-redux";
import ViewPdf from "./ViewPdf";

const AdminDashboard = (props) => {
  const { users, profiles } = props;
  const [pdfData, setpdfData] = useState("");

  const handleClick = (user) => {
    const userId = user.id;
    const hasProfile =
      profiles &&
      profiles.some((profile) => {
        return profile.id === userId;
      });

    if (!hasProfile) {
      setpdfData("");

      window.alert("no profile for this user");
    } else {
      profiles &&
        profiles.map((profile) => {
          if (profile.id == userId) {
            setpdfData(profile.pdf);
          }
        });
    }
  };
  var count = 0;

  return (
    <div
      style={{ backgroundColor: "#111", minHeight: "100%" }}
      className="fluid-container admin"
    >
      <h1 className="text-center p-5 text-light ">
        <span className="heading">Admin Dashboard</span>{" "}
      </h1>

      <div className="appl-lists">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                <button className="btn">Delete All</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                count++;
                return (
                  <tr
                    onClick={() => {
                      handleClick(user);
                    }}
                  >
                    <th scope="row">{count}</th>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center"></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div class="">
          <ViewPdf data={pdfData} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  profiles: state.profiles,
});
export default connect(mapStateToProps)(AdminDashboard);
