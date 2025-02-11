import './App.css';
import './HomePage.css';
import transition from './transition.js';
import Bubbles from './Bubbles.js';
import Guppy from './svg/Guppy';
import GuppyCursor from './GuppyCursor';
import BubbleCursor from './BubbleCursor';
import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react';

function HomePage(props) {
  useEffect(() => {
    document.title = "Diego Yañez-Laguna"
    
    console.log("Starting INTERVAL")
    // for (let i=0; i<30; i++) {
    //   createBubbleHome()
    // } 
    var bubbleGenInterval = setInterval(createBubbleHome, 100)
    setTimeout(() => {
      clearInterval(bubbleGenInterval)
      console.log("____CLEARING INTERVAL_______________")
    }, 2000)
  },[])

  
  var [erasing, setErasing] = useState(false)


  function redirectDelay(path, category) {
    setErasing(true)
    window.location.href = path+"?categ="+category;
  }

  function createBubbleHome () {
    const container = document.getElementById("initBubbleGenerator")
    const newBubble = document.createElement('span')

    var size = Math.random() * 110 + 10;
    newBubble.style.width = size + "px";
    newBubble.style.height = size + "px";
    
    var posX = Math.random() * (window.innerWidth + 2*size) - size;
    var posY = window.innerHeight + size - 10;
    newBubble.style.left = posX +  "px"
    newBubble.style.top = posY +  "px"

    console.log("\t\tBubble Added")
    container.appendChild(newBubble)
    setTimeout(() => {
        newBubble.remove()
    }, 1000+Math.random()*5000)
  }

  return (
    <div className="" id="homeContainer">
      {/* <Bubbles resetBubbles={() => console.log()}></Bubbles> */}
      <div id="erase-container" className={erasing ? "beginErase":""}></div>
      <div id="initBubbleGenerator" className='bubbleContainer'></div>
     
     

      <p className='PangramDisplay floatUp' id="wavy-name" style={{"--j":1}}>
        <span style={{"--i":1}}>D</span>
        <span style={{"--i":2}}>I</span>
        <span style={{"--i":3}}>E</span>
        <span style={{"--i":4}}>G</span>
        <span style={{"--i":5}}>O</span>
        <span style={{"--i":6}}> </span>
        <span style={{"--i":7}}>Y</span>
        <span style={{"--i":8, "margin-left":"-.08em"}}>A</span>

        {/* <span style={{"--i":9}}>Ñ</span> */}
        
        <span style={{"--i":9, "margin-left":"-.01em"}} id="enye">
            <span id="ene">N</span>
            <span id="tilde">~</span>
        </span>


        <span style={{"--i":10, "margin-left":"-.033em"}}>E</span>
        <span style={{"--i":11, "margin-left":".03em"}}>Z</span>
        <span style={{"--i":12}}>-</span>
        <span style={{"--i":13}}>L</span>
        <span style={{"--i":14}}>A</span>
        <span style={{"--i":15}}>G</span>
        <span style={{"--i":16}}>U</span>
        <span style={{"--i":17}}>N</span>
        <span style={{"--i":18}}>A</span>
      </p>

      <div className='floatUp' style={{"--j":2.5}}>
        <p id="home-bio" >
          Hi, I’m Diego! I am a designer/programmer/engineer/tinkerer who loves making things, experimenting, and learning 
          new things along the way. I recently graduated from MIT with a major in Art & Design, while also doing a bit of 
          computer science, mechanical engineering, and music. 
          <br></br>
          <br></br>
          Projects are roughly categorized below, although most of them fit into multiple. Feel free to reach out if you want to work together on anything! 
        </p>
      </div>

      
      
      <br></br>

      
      <div className="floatUp hplC" style={{"--j":3}}>
        <div onClick={() => {redirectDelay("/projects","design")}} className="homeProjLink" style={{"--i":1}}>
            <p>DESIGN</p>
        </div>
      </div>
      
      <div className="floatUp hplC" style={{"--j":4}}>
        <div onClick={() => {redirectDelay("/projects","engineering")}} className="homeProjLink" style={{"--i":2}}>
            <p>ENGINEERING</p>
        </div>
      </div>
      
      <div className="floatUp hplC" style={{"--j":5}}>
        <div onClick={() => {redirectDelay("/projects","coding")}} className="homeProjLink" style={{"--i":3}}>
            <p>CODING</p>
        </div>
      </div>
      {/* <Guppy classProp={"defaultGuppy homeGuppy"}></Guppy> */}
      <BubbleCursor></BubbleCursor>
      <GuppyCursor></GuppyCursor>

    </div>
  );
}

export default transition(HomePage);
