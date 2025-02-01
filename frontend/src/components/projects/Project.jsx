import React from 'react'
import './project.css'
import css from "../../assets/css.png"
import java from "../../assets/java.png"
import cpp from "../../assets/c++.png"
import git from "../../assets/github.png"
import js from "../../assets/js.png"
import mongodb from "../../assets/mongodb.png"
import html from "../../assets/html-5.png"
import node from "../../assets/nodejs.png"
import python from "../../assets/python.png"
import react from "../../assets/react.png"


const data = [
  {
    id: 1,
    image: java,
    title: "JAVA",
  },
  {
    id: 2,
    image: cpp,
    title: "C++",
  },
  {
    id: 3,
    image: python,
    title: "PYTHON",
  },
  {
    id: 4,
    image: html,
    title: "HTML",
  },
  {
    id: 5,
    image: css,
    title: "CSS",
  },
  {
    id: 6,
    image: react,
    title: "REACT",
  },
  {
    id: 7,
    image: mongodb,
    title: "MONGO DB",
  },
  {
    id: 8,
    image: node,
    title: "NODE",
  },
  {
    id:10,
    image:js,
    title:"JS"
  },
  {
    id: 9,
    image: git,
    title: "GIT",
  },
];

const Project=()=> {
  return (
    <section className="services container section" id='skills' >
      <h2 className="section_title">Programming Skills</h2>

      <div className="services_container grid">
        {data.map(({id,image,title})=>{
          return (
            <div className="service_card" key={id}>
              <img src={image} className='service_img' alt="" />
              <h3 className='service_title'>{title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project