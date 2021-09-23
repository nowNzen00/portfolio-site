import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./AboutMe.css";
function AboutMe() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <section>
        <p>
          I am a highly motivated and self-driven, aspiring web and software
          engineer
          <br /> based out of Las Vegas, NV. For the past six months, I have
          worked
          <br />
          towards honing my skill in full-stack development by creating small
          <br />
          <a className="link-tag" href="./Projects">
            projects
          </a>{" "}
          that have helped me grasp complex solutions and ideas <br />
          for the best user experience.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
