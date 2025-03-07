import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a target="_blank" href="https://www.facebook.com/regal.adhikari/">
                <i className="fa fa-facebook-square" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/regal-adhikari-03b958254/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a target="_blank" href="https://www.instagram.com/adhikariregal/">
                <i className="fa fa-instagram" />
              </a>
              <a target="_blank" href="https://www.youtube.com/@RegalAdhikari">
                <i className="fa fa-youtube-square" />
              </a>
              <a target="_blank" href="https://regalroyale.itch.io/">
                <i className="fa fa-gamepad" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Regal Adhikari</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer 🖥️",
                    1000,
                    "Game Developer 🎮",
                    1000,
                    "AI/ML Enthusiast 🤖",
                    1000,
                    "Mobile App Developer 📱",
                    1000,
                    "DotNet Developer 💻",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              I am a passionate developer who loves to code and build
              new things.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="regalcv.pdf" download="regalcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
