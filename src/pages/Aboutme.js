import React from "react";
import "../assets/css/Aboutme.css";
import myphoto from "../assets/img/Profile 1.jpg";
import vancouverphoto from "../assets/img/vancouver.webp";

const Aboutme = () => {
  return (
    <div className="about-wrapper">
      <header className="about-header">About Me</header>

      <div className="my-image">
        <img className="image" src={myphoto} alt="my-picture"></img>
      </div>
      <aside className="my-info">
        <span className="my-info-p">
          Welcome to my personal webpage! I'm an up-and-coming full stack web
          developer with a genuine passion for all things tech. Whether it's
          designing sleek interfaces or crafting powerful backend systems, I
          thrive in the ever-evolving world of web development. With an outgoing
          and friendly personality, I enjoy collaborating with others and have a
          knack for fostering great teamwork. Equally comfortable working
          independently, I pride myself on my ability to tackle complex
          challenges head-on and find innovative solutions. Born and raised on
          beautiful Vancouver Island, BC, Canada, I have a deep appreciation for
          the great outdoors. When I'm not immersed in coding, you can often
          find me exploring the stunning landscapes, hiking through lush
          forests, or catching waves on the island's picturesque beaches. Sports
          are also a significant part of my life, and I find joy in playing
          golf, hockey, and baseball. My personal webpage is a space where I can
          share my projects, experiences, and insights from the tech industry.
          Join me on this exciting journey as I continue to learn, grow, and
          create impactful web solutions. Feel free to connect with me and let's
          embark on some exciting collaborations together!
        </span>
      </aside>
      <div className="skills-info">
        <header className="my-skills-header">My Skills</header>
        <ol className="skills-list">
          <li>Javascript</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Responsive Design</li>
          <li>Bulma</li>
          <li>Bootstrap</li>
          <li>SEO</li>
        </ol>
      </div>
      <div className="im-from-wrapper">
        <header className="location-info">My Home?</header>
        <p className="info-p">I am from the beautiful city of Vancouver B.C!</p>
        <img className="vancouver" src={vancouverphoto} alt="vancouver"></img>
      </div>
    </div>
  );
};

export default Aboutme;
