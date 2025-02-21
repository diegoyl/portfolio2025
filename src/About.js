import './App.css';
import './About.css';
import transition from './transition.js';
import NavBar from './NavBar';
import Footer from './Footer';
import React, {useEffect} from 'react';

import profilePic from './img/profilePic.jpeg';


function About(props) {

  useEffect(() => {
      document.title = "About"
  },[])


  return (
    <div>
      <NavBar page={"about"}></NavBar>

        <div id="" className="aboutPage content-left content-margintop content-padding">

            <div className="splitGrid">
              <div className='splitDiv leftSplit'>
                <h2>Hi, I'm Diego!</h2>

                <p>
                    I recently graduated from MIT where I studied Art & Design and Computer Science. I'm originally from Austin, TX 🤠.
                    Recently, I've been most interested in interaction design and creative technology.
                    I am also interested/experienced 
                    in computational design, any kind of coding, graphic design, music, and actually using ML/AI in interesting ways.
                    <br></br>
                    <br></br>

                    In my free time I like making music, 
                    dancing, playing soccer and tennis, 
                    and making random stuff on photoshop. 
                    You can follow me at <a target="_blank" href="https://www.instagram.com/tryingtryiing/" rel="noreferrer">@tryingtryiing</a> if you want to see any of that. 
                    <br></br>
                    <br></br>
                    
                    These are some groups I have been a part of: 
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/_movementality/" rel="noreferrer">MMT 🕺</a> 
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/mitridonkulous/" rel="noreferrer">Donk 🕺</a>
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/diegoatethedrummer/" rel="noreferrer">D.A.D. 🎸🥁</a>
                    <br></br>
                </p>
                <br></br>

                <p className='PangramHeader'>Current Obsessions...</p>
                <p>
                  <a target="_blank" href="https://www.https://www.youtube.com/@blaccmassxx" rel="noreferrer">blaccmass remixes</a> 

                    
                    , 
                    Three Body Problem, Dr. K, watermelon
                    <br></br>
                    <br></br>

                </p>

                <div style={{"opacity":".5"}}>
                  <p className='PangramHeader'>Obsessions Archive...</p>
                  <p>
                      the olympics, Conductor Williams instrumentals, Dune, cooking, mummy_joe (instagram page), mango sticky rice, jookin (dance style), Attack on Titan, Pocket Operators, Denzel Curry, sports betting models, Kendrick, orange chicken, Julian DeGuzman, MPC drum machine, Formula 1, buffalo wings, Avatar TLA, collaging, Rosalia, NCT 127, Hamilton
                  </p>

                </div>
                
            </div>


              <div className='splitDiv rightSplit'>
                  <img src={profilePic} style={{"width":"100%"}} alt="diego's face"/>
              </div>

            </div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(About);
