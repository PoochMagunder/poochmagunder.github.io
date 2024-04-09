import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../assets/css/Projects.css";
import FirstP from "../assets/img/first-project.jpg";
import SecondP from "../assets/img/Valorant_Cover_Art.webp";
import ThirdP from "../assets/img/logo.png";
import FourthP from "../assets/img/craftydezignz.png";

const Projects = () => {
  return (
    <div className="project-wrapper">
      <header className="project-header">My Projects</header>
      <div className="project-container">
        <Card
          as={Link}
          to={"https://poochmagunder.github.io/Portfolio-Website/"}
          className="first-project-card"
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header style={{ color: "white" }}>My First Webpage</Card.Header>
          <Card.Img className="cardimgs" variant="top" src={FirstP} />
        </Card>
        <Card
          as={Link}
          to={"https://project-friendly-fire.herokuapp.com/"}
          className="second-project-card"
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header style={{ color: "white" }}>Friendly Fire</Card.Header>
          <Card.Img className="cardimgs" variant="top" src={SecondP} />
        </Card>
        <Card
          as={Link}
          to={"https://ling-king-fishing-a75c68586413.herokuapp.com"}
          className="third-project-card"
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header style={{ color: "white" }}>
            Ling King Fishing
          </Card.Header>
          <Card.Img className="cardimgs" variant="top" src={ThirdP} />
        </Card>
        <Card
          as={Link}
          to={"https://crafty-dezignz-02ad474c9858.herokuapp.com/"}
          className="fourth-project-card"
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header style={{ color: "white" }}>Crafty Dezignz</Card.Header>
          <Card.Img className="fourthcardimg" variant="top" src={FourthP} />
        </Card>
      </div>
    </div>
  );
};

export default Projects;
