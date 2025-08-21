import './App.css';
import './NavBar.css';
import React, {useState, useEffect} from 'react';

import GuppySrc from "../src/img/guppySMOL-BLUE.png"

function NavBar({page, centerTitle, ctShow}) {
    var [activePage, setAP] = useState(page)
  
    var [loaded, setLoaded] = useState(false)
    var [erasing, setErasing] = useState(false)
    useEffect(() => {
      setLoaded(true)
    },[])

    function redirectDelay(path) {
      setErasing(true)
      setTimeout(() => {
        window.location.href = path;
      }, 310)
    }
  
    
  return (
    <header id="navbar" className="">
        <div id="load-container" className={loaded ? "removeErase transition-container":"transition-container"}>
            <p>Loading...</p>
        </div>

        <div id="erase-container" className={erasing ? "beginErase transition-container":"transition-container"}>
            {/* <p>...</p> */}
        </div>

        <div className="navLeft navHalf">

            <div onClick={() => {redirectDelay("/")}} 
                className="navlink">
                <img id="navGuppy" src={GuppySrc}/>
                <p id="navName" >DIEGO YAÑEZ-LAGUNA</p>
            </div>
        </div>

        <div className="navRight navHalf">

            <div onClick={() => {redirectDelay("/work")}} 
                className={activePage=="work" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p><span className='nbArrow'>›</span> WORK</p>
            </div>
            <div onClick={() => {redirectDelay("/about")}} 
                className={activePage=="about" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p><span className='nbArrow'>›</span> ABOUT</p>
            </div>


            <a target="_blank" href="https://www.instagram.com/tryingtryiing/" 
                className={activePage=="insta" ? "activeNavLink navlink pagelink pagelink-last":"navlink pagelink pagelink-last"}>
                {/* <img src="./img/menu4.png" id="m4" class="menuimg"> */}
                <p><span className='nbArrow'>›</span> INSTA</p>
            </a>
        </div>
        
        <p id="centerTitle" className={ctShow ? "showCt":"hideCt"} >{centerTitle}</p>


    </header>
  );
}

export default NavBar;
