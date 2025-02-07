import './App.css';
import './NavBar.css';
import {NavLink} from "react-router-dom"
import React, {useState, useEffect} from 'react';

import Guppy from "./img/guppySMOL-BLUE.png"

function NavBar({page}) {
    var [activePage,setActivePage] = useState(page)


  return (
    <header id="navbar" className="">

        <div className="navLeft navHalf">
            <NavLink to="/" className="navlink">
                <img id="navGuppy" src={Guppy}/>
                <p id="navName" >DIEGO YAÑEZ-LAGUNA</p>
            </NavLink>
        </div>

        <div className="navRight navHalf">
            
            <NavLink to="/projects" state={{ categoryPassedIn: "all" }} 
                className={activePage=="projects" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>PROJECTS</p>
            </NavLink>

            <NavLink to="/about" 
                className={activePage=="about" ? "activeNavLink navlink pagelink":"navlink pagelink"}>
                <p>ABOUT</p>
            </NavLink>

            <a target="_blank" href="https://www.instagram.com/tryingtryiing/" 
                className={activePage=="insta" ? "activeNavLink navlink pagelink pagelink-last":"navlink pagelink pagelink-last"}>
                {/* <img src="./img/menu4.png" id="m4" class="menuimg"> */}
                <p>INSTA</p>
            </a>

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
