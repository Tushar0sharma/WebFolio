import React from 'react';
import "./home.css"
import Me from "../../assets/tusharpic.jpg"
import Headersocials from './Headersocials';
import Scrolldown from './Scrolldown';
import Shape from './Shape';
import Textchange from './Textchange';



function Home() {
  return (
       <section className='home container' id='home'>
        <img src="https://cdn.dribbble.com/userupload/20060762/file/original-89e23399b461e9274e9f2f9acacc5ee7.gif" className="bg-gif" alt="Background Animation" />


        <div className="intro">
          <img src={Me} className='home_img' alt="" />
          <h1 className='home_name'>Tushar Sharma</h1>
          <Textchange/>
          <span>I’m a pre-final year B.Tech student with a strong passion for problem-solving and technology. Proficient in Java and skilled in data structures and algorithms, I enjoy tackling challenges and continuously learning.
              <br />
              Currently, I’m preparing for campus placements and exploring opportunities to contribute to impactful projects while enhancing my skills in web development.
          </span>
          <Headersocials/>
          <a href="https://drive.google.com/file/d/15UlJie1nYaCSSG1nuMh9xys2Hc4hKlP6/view" target='_blank' 
        rel="noopener noreferrer" className="btn">Download Resume</a> 
           <Scrolldown/>

        </div>
        <Shape/>
       </section>
  )
}

export default Home