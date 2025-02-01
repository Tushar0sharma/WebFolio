import React from 'react'
import "./about.css"
import gfg from "../../assets/GeeksforGeeks.svg.png"
import leet from "../../assets/leetcode.png"
import chef from "../../assets/icons8-codechef-64.png"
import git from "../../assets/github.png"
import rank from "../../assets/hackerrank.png"
import force from "../../assets/code-forces.png"
import linked from "../../assets/linkedin.png"


export default function About() {
  return (
    <section className="profile container section" id='profile'>
      <h2 className="section_title">Programming Profile</h2>

      <div className="profile_container grid">
        <div className="profile_item">
            <img src={gfg} alt="" className='profile_img' />
            <h3 className="profile_name">GeeksforGeeks</h3>
            <a href="https://www.geeksforgeeks.org/user/tusharshaoz1v/" target='_blank'  rel="noopener noreferrer" className="btn1">Visit Me</a>
        </div>
        <div className="profile_item best">
          <span className="badge">Significant</span>
            <img src={leet} alt="" className='profile_img' />
            <h3 className="profile_name">LeetCode</h3>
            <a href="https://leetcode.com/u/Tushar0sharmA/" target='_blank'  rel="noopener noreferrer" className="btn1">Visit Me</a>
        </div>
        <div className="profile_item">
            <img src={force} alt="" className='profile_img' />
            <h3 className="profile_name">CodeForces</h3>
            <a href="https://codeforces.com/profile/Tushar0sharmA" target='_blank'  rel="noopener noreferrer" className="btn1">Visit Me</a>
        </div>
        <div className="profile_item">
            <img src={chef} alt="" className='profile_img' />
            <h3 className="profile_name">CodeChef</h3>
            <a href="https://www.codechef.com/users/tushar0sharma" target='_blank'  rel="noopener noreferrer" className="btn1">Visit Me</a>
        </div>
        <div className="profile_item">
            <img src={rank} alt="" className='profile_img' />
            <h3 className="profile_name">HackerRank</h3>
            <a href="https://www.hackerrank.com/profile/tusharsharma7037"  rel="noopener noreferrer" target='_blank' className="btn1">Visit Me</a>
        </div>
        <div className="profile_item">
            <img src={linked} alt="" className='profile_img' />
            <h3 className="profile_name">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/tushar-sharma-37856b2b0/"  rel="noopener noreferrer" target='_blank' className="btn1">Visit Me</a>
        </div>
        <div className="profile_item">
            <img src={git} alt="" className='profile_img' />
            <h3 className="profile_name">Github</h3>
            <a target='_blank'  rel="noopener noreferrer" href="https://github.com/Tushar0sharma" className="btn1">Visit Me</a>
        </div>
      </div>
    </section>
  )
}
