import React from 'react'
import './portfolio.css'
import Menu from './Menu'
import { useState } from 'react'

const Portfolio=()=> {
  const [item,setitem]=useState(Menu)
  const filteritem=(ele)=>{
    const update=Menu.filter((curr)=>{
      return curr.category===ele
    })
    setitem(update)
  }

  return (
    <section className="work container section" id="projects">
      <h2 className="section_title">Recent Work</h2>

      <div className="work_filters">
        <span className="work_item" onClick={()=>{setitem(Menu)}}>EveryThing</span>
        <span className="work_item" onClick={()=>{filteritem("Creative")}}>Creative</span>
        <span className="work_item" onClick={()=>{filteritem('Art')}}>Art</span>
        <span className="work_item" onClick={()=>filteritem('Design')}>Design</span>
      </div>

      <div className="work_container grid">
        {item.map((ele)=>{
          const{id,image,title,category}=ele
          return(
            <div className="work_card" key={id}>
                <div className="work_nail">
                  <img src={image} alt=""  className='work_img' />
                  <div className="work_mask"></div>
                  </div>

                  <span className="work_category">{category}</span>
                  <h3 className="work_title">{title}</h3>
                  <a href="#home"  className='work_button'>
                    <i className='icon-link work_button-icon'></i>
                  </a>
            </div>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio