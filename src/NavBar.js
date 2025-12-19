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
                <p><span className='nbArrow'><svg width="71" height="175" viewBox="0 0 71 175" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4713 4.37241C14.1618 -0.949158 22.6051 0.240446 26.9947 6.42417L63.5309 57.8968C68.1544 64.4112 68.1547 73.5943 63.5309 80.1087L26.9947 131.582C22.6726 137.67 14.4232 138.913 8.73985 133.875L8.4713 133.631C3.21319 128.713 2.56577 120.241 6.67344 114.438L6.69298 114.409L6.71739 114.375L39.7408 69.0023L6.71739 23.6292L6.69298 23.596L6.67051 23.5619C2.56649 17.7589 3.21496 9.28983 8.4713 4.37241Z" fill="currentColor"/></svg></span> WORK</p>
            </div>
            <div onClick={() => {redirectDelay("/about")}} 
                className={activePage=="about" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p><span className='nbArrow'><svg width="71" height="175" viewBox="0 0 71 175" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4713 4.37241C14.1618 -0.949158 22.6051 0.240446 26.9947 6.42417L63.5309 57.8968C68.1544 64.4112 68.1547 73.5943 63.5309 80.1087L26.9947 131.582C22.6726 137.67 14.4232 138.913 8.73985 133.875L8.4713 133.631C3.21319 128.713 2.56577 120.241 6.67344 114.438L6.69298 114.409L6.71739 114.375L39.7408 69.0023L6.71739 23.6292L6.69298 23.596L6.67051 23.5619C2.56649 17.7589 3.21496 9.28983 8.4713 4.37241Z" fill="currentColor"/></svg></span> ABOUT</p>
            </div>


            <a target="_blank" href="https://www.instagram.com/tryingtryiing/" 
                className={activePage=="insta" ? "activeNavLink navlink pagelink pagelink-last":"navlink pagelink pagelink-last"}>
                {/* <img src="./img/menu4.png" id="m4" class="menuimg"> */}
                <p><span className='nbArrow'><svg width="71" height="175" viewBox="0 0 71 175" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4713 4.37241C14.1618 -0.949158 22.6051 0.240446 26.9947 6.42417L63.5309 57.8968C68.1544 64.4112 68.1547 73.5943 63.5309 80.1087L26.9947 131.582C22.6726 137.67 14.4232 138.913 8.73985 133.875L8.4713 133.631C3.21319 128.713 2.56577 120.241 6.67344 114.438L6.69298 114.409L6.71739 114.375L39.7408 69.0023L6.71739 23.6292L6.69298 23.596L6.67051 23.5619C2.56649 17.7589 3.21496 9.28983 8.4713 4.37241Z" fill="currentColor"/></svg></span> INSTA</p>
            </a>
        </div>
        
        <p id="centerTitle" className={ctShow ? "showCt":"hideCt"} >{centerTitle}</p>


    </header>
  );
}

export default NavBar;
