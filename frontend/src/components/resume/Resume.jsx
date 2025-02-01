import React from "react";
import "./resume.css";
import Data from "./Data";
import experience_gif_unscreen from "../../assets/experience-gif-unscreen.gif"
import Card from "./Card";

function Resume() {
  // Filter education and experience items
  const educationData = Data.filter((item) => item.category === "education");
  // const experienceData = Data.filter((item) => item.category === "experience");

  return (
    <section className=" resume container section" id="about">
      <h2 className="section_title">Experience</h2>
      <div className="resume_container grid">
        {/* Timeline for education */}
        <div className="timeline grid">
          {educationData.map((item) => (
            <Card
              key={item.id} // Assuming `id` is a unique property in Data
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div>

        {/* Timeline for experience */}
        {/* <div className="timeline grid">
          {experienceData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              year={item.year}
              desc={item.desc}
            />
          ))}
        </div> */}
        <div className="gif ">
          <img src={experience_gif_unscreen} alt="" />
        </div>
      </div>
      
    </section>
  );
}

export default Resume;
