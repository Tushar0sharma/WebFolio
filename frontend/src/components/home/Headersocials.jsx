import React from 'react';
// import "./home.css"

function Headersocials() {
  return (
    <div className="home_socials">
      <a 
        href="https://www.instagram.com/sharma_3770/?hl=en" 
        className="home_socials_link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
        
      </a>

      <a 
        href="https://www.linkedin.com/in/tushar-sharma-37856b2b0/" 
        className="home_socials_link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a 
        href="https://github.com/Tushar0sharma" 
        className="home_socials_link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a 
        href="https://leetcode.com/u/Tushar0sharmA/" 
        className="home_socials_link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-code"></i>
      </a>
    </div>
  );
}

export default Headersocials;
