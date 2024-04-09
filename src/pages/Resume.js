import React from "react";
import { saveAs } from "file-saver";
import "../assets/css/Resume.css";
import ResumeImg from "../assets/img/Screenshot (1).png";
import MyResume from "../assets/resume/Devon_Eadie_-_ .pdf";

const Resume = () => {
  const handleDownloadPDF = () => {
    const pdf = MyResume;
    saveAs(pdf, "DevonEadiesResume.pdf");
  };

  return (
    <div className="resume-wrapper">
      <header className="resume-header">My Resume</header>
      <div className="resume-container">
        <img className="resume-img" src={ResumeImg} alt="img-of-resume"></img>
        <button onClick={handleDownloadPDF} id="downloadBtn" value="download">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
