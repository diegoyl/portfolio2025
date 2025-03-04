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
              <img id="profHideOnPC" src={profilePic} style={{"width":"100%"}} alt="diego's face"/>

              <div className='splitDiv leftSplit'>
                <h2>Hi, I'm Diego!</h2>

                <p>
                    I'm a designer/programmer/engineer raised in Austin, TX. I recently graduated from MIT, where I majored in Art & Design and took classes at the intersection of design, computer science, and mechanical engineering. 
                    I am interested in using technology to create meaningful user experiences that are playful and immersive.
                    I am also interested and experienced 
                    in web design, 3D modeling/rendering, graphic design, music, and  using ML/AI in actually interesting ways. Most recently I finished working
                    
                    on <a href="/squish">
                        <i>Squish</i>
                    </a>, an instrument controlled by foam blocks!

                    <br></br>
                    <br></br>

                    In my free time I like making music (hip-hop + rock), 
                    dancing (hip-hop + house), playing soccer and tennis, 
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
                <br></br>

                <p className='PangramCompact'>CURRENT OBSESSIONS...</p>
                <p>
                  <a target="_blank" href="https://www.https://www.youtube.com/@blaccmassxx" rel="noreferrer">blaccmass remixes</a> 

                    
                    , 
                    Three Body Problem, Dr. K, watermelon, Overcooked
                    <br></br>
                    <br></br>

                </p>

                <div style={{"opacity":".5"}}>
                  <p className='PangramCompact'>OBSESSIONS ARCHIVE...</p>
                  <p>
                      mango sticky rice, Conductor Williams instrumentals, Dune, the olympics, cooking, mummy_joe (instagram page), jookin (dance style), Attack on Titan, Pocket Operators, Denzel Curry, sports betting models, Kendrick, orange chicken, Julian DeGuzman, MPC drum machine, Formula 1, buffalo wings, Avatar TLA, collaging, Rosalia, NCT 127, Hamilton
                  </p>

                </div>
                
            </div>


              <div className='splitDiv rightSplit'>
                  <img id="profHideOnMobile" src={profilePic} style={{"width":"100%"}} alt="diego's face"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h3>Contact Me!</h3>
                  <p><strong>EMAIL / </strong>hi.diegoyl@gmail.com</p>
                  <p><strong>LINKEDIN / </strong><a href="https://www.linkedin.com/in/diego-yanez-laguna/" target="_blank">linkedin.com/in/diego-yanez-laguna/</a></p>
                  <p><strong>INSTA / </strong><a href="https://www.instagram.com/tryingtryiing/" target="_blank">@tryingtryiing</a></p>
                  <p><strong>PHONE # / </strong>...maybe if you email me I'll give it to you</p>
              
              </div>

            </div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(About);
