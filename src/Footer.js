import './App.css';
import './Footer.css';
import {NavLink} from "react-router-dom"
import React, {useState, useEffect} from 'react';

import Guppy from "./img/guppySMOL-BLUE.png"
import Bubbles from './Bubbles.js';

function NavBar({page}) {
  var [activeBubbles, setActiveBubbles] = useState(false)
  var [erasing, setErasing] = useState(false)

  function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("CLICKING & STARTING")
    setActiveBubbles(true)
  }
  function resetBubbles() {
    setActiveBubbles(false)
    console.log("I GOT RESET")
  }

  function redirectDelay(path) {
    setErasing(true)
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }


  return (
    <footer id="footer" className="">
        <div id="erase-container" className={erasing ? "beginErase transition-container":"transition-container"}>
            {/* <p>...</p> */}
        </div>
        {/* <Bubbles active={activeBubbles} resetBubbles={resetBubbles}></Bubbles> */}

        <div id="footer-links">
        <p onClick={() => toTop()} id="toTop" className='bigFooterText'>⌃<br></br>SWIM TO TOP</p>


        </div>
        
        <br></br>
        <br></br>

        <div id="footer-links">
          <div></div>

          <div onClick={() => {redirectDelay("/projects")}} >
                <p className="bigFooterText" id="allProjects" >ALL PROJECTS</p>
          </div>

          <div></div>

        </div>

        <br></br>
        <br></br>
        <br></br>

        <br></br>
            <br></br>
      <div id="createdwith">
              <span>Created with </span>

              <span className='stLine' >
                  <span className="stText"> Adobe Potrfolio </span>  
              </span>

              <span> lots of love &lt;3</span>
              {/* TODO: heart bubbles */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>

    

    </footer>
  );
}

export default NavBar;
