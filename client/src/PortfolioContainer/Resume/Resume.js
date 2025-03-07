import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Mini Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML, CSS, Javascript", ratingPercentage: 80 },
    { skill: "React JS", ratingPercentage: 65 },
    { skill: "MySQL", ratingPercentage: 70 },
    { skill: "Unity", ratingPercentage: 70 },
    { skill: "DotNet Core", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Khoji Web Based Exploration game ",
      duration: { fromDate: "2024", toDate: "2025" },
      description:
        "2D exploration RPG set in Nepal, developed in Unity with C# while I personally designed some of the sprite assets in Aseprite. ",
      subHeading:
        "Technologies Used:  Unity, C#, Illustrator, Aseprite, Git",
    },
    {
      title: "MeroPDF Mitra",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "AI integrated problem solving mobile app where you upload your PDFs and ask questions specific to the PDF.",
      subHeading:
        "Technologies Used:  Langchain, TensorFlow, pytesseract, Flask, OpenCV, Flutter",
    },
    {
      title: "World's Hardest Game Solving AI Bot",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Two step project in which you: 1. Play by yourself where you nagivate the difficult levels and reach to the goal or 2. Train AI using RL to solve the game and reach the goal by itself",
      subHeading:
        "Technologies Used: Pygame, Reinforcement Learning, TensorFlow, GitHub, Aseprite, Illustrator",
    },
  ];
  const miniProjectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024", toDate: "2025" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Gunslinger - A Unity 3D game",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        " First Person Shooter created in Unity featuring hand crafted models made in Blender.",
      subHeading:
        "Technologies Used:  Unity, C#, Blender, Illustrator, GitHub",
    },
    {
      title: " Voxel Engine",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "An interactive and visually compelling voxel-based game engine utilizing modern graphics technologies and efficient programming techniques. Made using Pygame for window management and user input, coupled with OpenGL for rendering.",
      subHeading:
        "Technologies Used:  Unity, C#, Blender, Illustrator, GitHub",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Kathmandu University, Nepal"}
        subHeading={"Bachelor of Engineering in Computer Engineering"}
        fromDate={"2020"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"Kathmandu Model College, Nepal"}
        subHeading={"+2 Science, Ministry Of Education, Nepal"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Paragon Public School"}
        subHeading={"SEE, Ministry Of Education, Nepal"}
        fromDate={"2015"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Techore Solutions"}
          subHeading={"UNITY GAME DEVELOPER"}
          fromDate={"2023"}
          toDate={"2024"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack web and mobile developer and also an
            online instructor on udemy.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          • Assisted in creating a website and mobile app with over 25 different games 
          (board games, card games, slots, etc.) along with a team of over 8 developers. 
          </span>
          <br />
          <span className="resume-description-text">
          • Integrated the web app with backend services to create user
            onboarding application with dynamic form content.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            <b>Tech Stack:</b> C#, Node.Js, Docker, Unity, GitHub, Agile, Game Logic 
            Programming, Illustrator, Photoshop
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
        <div className="resume-screen-container" key="Mini Projects">
        {miniProjectDetails.map((miniProjectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={miniProjectDetails.title}
            subHeading={miniProjectDetails.subHeading}
            description={miniProjectDetails.description}
            fromDate={miniProjectDetails.duration.fromDate}
            toDate={miniProjectDetails.duration.toDate}
          />
        ))}
      </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Playing Video Games"
        description="Gaming isn’t just a hobby for me; it’s an escape, a challenge, and a way to sharpen my reflexes. Whether it's exploring vast open worlds, strategizing in fast-paced shooters, or competing online, I love the thrill of immersive gameplay."
      />
      <ResumeHeading
        heading="Watching Series/Movies"
        description="Diving into well-crafted stories, whether through binge-worthy series or captivating movies, is something I truly enjoy."
      />
      <ResumeHeading
        heading="Music"
        description="Music is my ultimate mood-setter, a constant companion through different moments of my day. Whether it’s vibing to upbeat tracks, unwinding with mellow tunes, or discovering new sounds on streaming platforms, I can’t go a day without it."
      />

    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt=""
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
