import './App.css';
import './NavBar.css';
import {NavLink, useNavigate} from "react-router-dom"
import React, {useState, useEffect} from 'react';

import Guppy from "./img/guppySMOL-BLUE.png"

function NavBar({page}) {
    var [activePage, setAP] = useState(page)
    var [erasing, setErasing] = useState(false)


    function redirectDelay(path) {
        setErasing(true)
        window.location.href = path;

        
        // setTimeout(() => {
        //     window.location.href = path; 
        // }, 400);
    }

    
  return (
    <header id="navbar" className="">
        <div id="erase-container" className={erasing ? "beginErase":""}></div>

        <div className="navLeft navHalf">

            <div onClick={() => {redirectDelay("/")}} 
                className="navlink">
                <img id="navGuppy" src={Guppy}/>
                <p id="navName" >DIEGO YAÑEZ-LAGUNA</p>
            </div>
        </div>

        <div className="navRight navHalf">
            
            {/* <NavLink to="/projects" state={{ categoryPassedIn: "all" }} 
                className={activePage=="projects" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>PROJECTS</p>
            </NavLink> 
            <NavLink to="/about" onClick={() => {redirectDelay("/projects")}} 
                className={activePage=="about" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>ABOUT</p>
            </NavLink> */}

            <div onClick={() => {redirectDelay("/projects")}} 
                className={activePage=="projects" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>PROJECTS</p>
            </div>
            <div onClick={() => {redirectDelay("/about")}} 
                className={activePage=="about" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>ABOUT</p>
            </div>


            <a target="_blank" href="https://www.instagram.com/tryingtryiing/" 
                className={activePage=="insta" ? "activeNavLink navlink pagelink pagelink-last":"navlink pagelink pagelink-last"}>
                {/* <img src="./img/menu4.png" id="m4" class="menuimg"> */}
                <p>INSTA</p>
            </a>
        </div>


    </header>
  );
}

export default NavBar;
