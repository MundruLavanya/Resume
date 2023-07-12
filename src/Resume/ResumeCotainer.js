import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Resume from "./Resume";
import "./resume.css";
const ResumeCotainer = () => {
  return (
    <div className="resume">
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default ResumeCotainer;
