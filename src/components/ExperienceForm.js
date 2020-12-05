import React, { useState } from "react";
const moment = require("moment");

const ExperienceForm = ({ setexperiences, experiences }) => {
  const [companyName, setcompanyName] = useState("");
  const [start, setStart] = useState("");
  const [end, setend] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div className="experience-badge-input">
      <div className="company-name">
        <input
          onChange={(e) => {
            setcompanyName(e.target.value);
          }}
          type="text"
          placeholder="Company Name"
          className="company"
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <span className="small">
          Start Date
          <input
            onChange={(e) => {
              setStart(moment(e.target.value).format("DD MMMM YYYY"));
            }}
            type="date"
            name=""
            id=""
          />
        </span>
        <br />
        <span className="small">
          End Date
          <input
            onChange={(e) => {
              setend(moment(e.target.value).format("DD MMMM YY"));
            }}
            type="date"
            name=""
            id=""
          />
        </span>
      </div>
      <br />
      <textarea
        onChange={(e) => {
          setdescription(e.target.value);
        }}
        placeholder="Describe your past job experience"
        rows="3"
      ></textarea>
      <button
        onClick={(e) => {
          e.preventDefault();
          setexperiences([
            ...experiences,
            { companyName, start, end, description },
          ]);
        }}
        className="add-experience"
      >
        Add +
      </button>
    </div>
  );
};

export default ExperienceForm;
