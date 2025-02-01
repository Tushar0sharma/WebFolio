import React, { useEffect } from 'react'
import "./sidebar.css"
import Logo from "../../assets/logo.svg"
import { useState,useRef } from "react"


function Sidebar() {
  const [open,setisopen]=useState(false)
  const sidebar=useRef(null)
  const toggle=(event)=>{
    // event.stopPropagation(); // Prevent event from propagating to the document
    setisopen(!open);
  }

  const handleclick=(event)=>{
    if(sidebar.current && !sidebar.current.contains(event.target)){
      setisopen(false);
    }
  };
  useEffect(()=>{
    if(open) {document.addEventListener('mousedown',handleclick);}
    else {document.removeEventListener('mousedown',handleclick)}
    return()=>{
      document.removeEventListener('mousedown',handleclick);
    };
  },[open]);

  return (
    <>
    <aside ref={sidebar} className={`aside ${open?'open':''}`}>
      <a href="#home" className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className='nav'>
          <div className="nav_menu">
              <ul className="nav_list">
                  <li className="nav_item">
                    <a href="#home" className="nav_link">
                      <i className='icon-home '></i>
                    </a>
                  </li>
                  <li className="nav_item">
                    <a href="#about" className="nav_link">
                      <i className=" icon-graduation"></i>
                    </a>
                  </li>
                  <li className="nav_item">
                    <a href="#skills" className="nav_link">
                      <i className="icon-briefcase"></i>
                    </a>
                  </li>
                  <li className="nav_item">
                    <a href="#projects" className="nav_link">
                      <i className='icon-ghost'></i>
                    </a>
                  </li>
                  <li className="nav_item">
                    <a href="#profile" className="nav_link">
                      <i className='icon-user-following'></i>
                    </a>
                  </li>
                  <li className="nav_item">
                    <a href="#contact" className="nav_link">
                      <i className='icon-bubble'> </i>
                    </a>
                  </li>
              </ul>
          </div>
      </nav>

      <div className="nav__footer">
        <span className='copyright'>&copy; 2024 - 2025.</span>
      </div>
    </aside>

     <div className="nav_toggle" onClick={toggle}>
      <i className={`icon-${open?'':'menu'}`}></i>
     </div>
    </>
  )
}

export default Sidebar