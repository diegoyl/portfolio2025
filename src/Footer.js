import './App.css';
import './Footer.css';
import {NavLink} from "react-router-dom"
import React, {useState, useEffect} from 'react';

import Guppy from "./img/guppySMOL-BLUE.png"

function NavBar({page}) {

  return (
    <footer id="footer" className="">
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
