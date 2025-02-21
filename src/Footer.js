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
            <p><br></br><br></br>hi.diegoyl@gmail.com</p>
            {/* <img id="footerGuppy" src={Guppy}/> */}

            <p onClick={() => toTop()} id="toTop" className='bigFooterText'>⌃<br></br>Swim to Surface</p>

              <a target="_blank" href="https://www.linkedin.com/in/diego-yanez-laguna/" 
                  className="">
            <br></br><br></br>

                  LinkedIn
              </a>

        </div>
        
        <br></br>
        <br></br>

        <div id="footer-links">
          <div></div>

          <div onClick={() => {redirectDelay("/projects")}} >
                <p className="bigFooterText" id="allProjects" >All Projects</p>
          </div>

          <div></div>

        </div>

        <br></br>
        <br></br>
        <br></br>

      <div style={{fontSize:".8em"}}>
              <span>Created with </span>

              <span className='stLine' >
                  <span className="stText"> Adobe Potrfolio </span>  
              </span>

              <span> lots of love &lt;3</span>
              {/* TODO: heart bubbles */}


      </div>
            
    

    </footer>
  );
}

export default NavBar;
