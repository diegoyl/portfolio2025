import './App.css';
import './Footer.css';
import {NavLink} from "react-router-dom"
import React, {useState, useEffect} from 'react';

import Guppy from "./img/guppySMOL-BLUE.png"
import Bubbles from './Bubbles.js';

function NavBar({page}) {
  var [activeBubbles, setActiveBubbles] = useState(false)

  function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("CLICKING & STARTING")
    setActiveBubbles(true)
  }
  function resetBubbles() {
    setActiveBubbles(false)
    console.log("I GOT RESET")
  }

  return (
    <footer id="footer" className="">
        {/* <Bubbles active={activeBubbles} resetBubbles={resetBubbles}></Bubbles> */}

        <p onClick={() => toTop()}>Swim to Top</p>
        <div id="footer-links">
            <p>hi.diegoyl@gmail.com</p>
            <img id="footerGuppy" src={Guppy}/>

                <a target="_blank" href="https://www.linkedin.com/in/diego-yanez-laguna/" 
                    className="">
                    LinkedIn
                </a>

        </div>


        <span>Created with </span>

        <span className='stLine'>
            <span className="stText"> Adobe Potrfolio </span>  
        </span>

        <span> lots of love &lt;3</span>
        

            
    

    </footer>
  );
}

export default NavBar;
