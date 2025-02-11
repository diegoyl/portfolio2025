import './App.css';
import './About.css';
import transition from './transition.js';
import NavBar from './NavBar';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';

import profilePic from './img/profilePic.jpeg';


function About(props) {
  useEffect(() => {
      document.title = "About"
  },[])


  return (
    <div>
      <NavBar page={"about"}></NavBar>

        <div id="projectPage" className="content-left content-margintop content-padding">

            <div className="splitGrid">
              <div className='splitDiv leftSplit'>
                <h2>Hi, I'm Diego!</h2>

                <p>
                    I recently graduated from MIT where I studied Art & Design and Computer Science. I'm originally from Austin, TX yeehawww.
                    Currently, I'm most interested in exploring interactive art and technology, 
                    mainly through the lens of music and play. I am also interested/experienced 
                    in computational design, fabrication, graphic design, web design, and ML/AI.
                    <br></br>

                    In my free time I like making music, 
                    dance, play soccer and tennis, 
                    and make random stuff on photoshop. 
                    You can follow me at 
                    <a target="_blank" href="https://www.instagram.com/tryingtryiing/">@tryingtryiing</a> 
                    if you want to see any of that. I used to be on these dance teams: 
                    <a target="_blank" href="https://www.instagram.com/mitridonkulous/">Donk</a> &
                    <a target="_blank" href="https://www.instagram.com/_movementality/">MoveMENtality</a> 
                    <br></br>
                    <br></br>

                    Current obsessions...
                    <br></br>
                    blaccmass remixes, the olympics, Dr. K, Three Body Problem, watermelon, Dune, Attack on Titan
                    <br></br>
                    <br></br>

                </p>

                <p>
                    Obsessions Archive...
                    <br></br>
                    Conductor Williams instrumentals, cooking, mummy_joe (instagram page), mango sticky rice, jookin (dance style), Pocket Operators, Denzel Curry, sports betting models, orange chicken, Julian DeGuzman, MPC drum machine, Formula 1, buffalo wings, Avatar TLA, collaging, Rosalia, NCT 127, Hamilton
                </p>

            </div>


              <div className='splitDiv rightSplit'>
                  <img src={profilePic} style={{"width":"100%","border-radius":"2%"}}/>
              </div>

            </div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(About);
