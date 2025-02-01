import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Resume from './components/resume/Resume'
import Project from './components/projects/Project'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact';
import Chatbot from './components/chatbot/Chatbot';
import './components/chatbot/Chatbot.css'; 


function App() {

  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <Resume/>
      <Project/>
      <Portfolio/>
      <About/>
      <Contact/>
    </main>
    <Chatbot/>
    </>
  );
}


export default App;
