import './App.css';
import './TestingPage.css';
import transition from './transition.js';
import Bubbles from './Bubbles.js';
import Guppy from './svg/Guppy';
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';

function TestingPage(props) {
  useEffect(() => {
    document.title = "Diego Yañez-Laguna"
  },[])


  return (
    <div className="">
      <Bubbles resetBubbles={() => console.log()}></Bubbles>
      <div className="homeBg"></div>

      <div style={{display:"inline-block",height:"200px",width:"200px", backgroundColor:"var(--c-gray)"}}></div>
      <div style={{display:"inline-block",height:"200px",width:"200px", backgroundColor:"var(--c-gray1b)"}}></div>
      <br></br>
      <div style={{display:"inline-block",height:"200px",width:"200px", backgroundColor:"var(--c-grayLight)"}}></div>
      <div style={{display:"inline-block",height:"200px",width:"200px", backgroundColor:"var(--c-gray2b)"}}></div>


      <p className='PangramDisplay' id="home-name">
        DIEGO YAÑEZ-LAGUNA
      </p>

      <Guppy classProp={"defaultGuppy"}></Guppy>

      <p className='PangramHeader' id="home-bio">
        Hi, I’m Diego! I am a designer/programmer/engineer/tinkerer who loves making things, experimenting, and learning 
        new things along the way. I recently graduated from MIT with a major in Art & Design, while also doing a bit of 
        computer science, mechanical engineering, and music. 
        <br></br>
        <br></br>
        Projects are roughly categorized below, although most of them fit into multiple. Feel free to reach out if you want to work together on anything! 
      </p>

      
      
      <br></br>
      <Link to="/projects" state={{ categoryPassedIn: "all" }}>Projects Link</Link>
      <br></br>
      <Link to="/projects" state={{ categoryPassedIn: "design" }}>Projects (Design)</Link>
      <br></br>
      <Link to="/projects" state={{ categoryPassedIn: "engineering" }}>Projects (Engineering)</Link>
      <br></br>
      <Link to="/projects" state={{ categoryPassedIn: "coding" }}>Projects (Coding)</Link>
      
      <br></br>
      <br></br>
      <button>Button</button>

      <br></br>
      <br></br>
      <br></br>
      <h1 className='PangramDisplay'>This is PangramDisplay </h1>
    
      <h1 className='PangramHeader'>This is PangramHeader </h1>
      <h1 className='PangramHeaderItalic'>This is PangramHeaderItalic </h1>

      <h1 className='PangramText'>This is PangramText </h1>
      <h1 className='PangramTextBold'>This is PangramTextBold </h1>

      <h1 className='PangramCompact'>This is PangramCompact </h1>
      


      <a>

      </a>
    </div>
  );
}

export default TestingPage;
