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
                    I'm a designer/programmer/engineer from Austin, TX. I graduated from MIT in 2024, where I majored in Art & Design and took classes in productdesign, computer science, mechanical engineering, and music. 
                    I'm interested in using technology to create more accessible user experiences that are playful and immersive.
                    I am also interested and experienced in web design, 3D modeling/rendering, making cool stuff with code, graphic design, music, game development, and ML/AI tools. 

                    <br></br>
                    <br></br>
                    Currently, I am doing UX design and frontend development for The Radar Company.
                    I am also contributing to <a target="_blank" 
                      href="https://github.com/theloni-monk/VitalVault/tree/main"
                      rel="noreferrer"
                      >VitalVault</a>
                    , an open-source app for faciliating medical document retrieval and organization.
                    
                    <br></br>
                    <br></br>
                    I love to collaborate and work on various types of projects. Feel free to reach out if there's anything I might be able to help you with! I am also open to doing freelance work in the following areas: branding/logo design, merch design, web design, 3D modeling/rendering. I also like to work on physical products and electronics, but currently have limited access to shops.
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
                    <a target="_blank" href="https://www.instagram.com/mitridonkulous/" rel="noreferrer">Donk 🕺</a>
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/_movementality/" rel="noreferrer">MMT 🕺</a> 
                    <br></br>
                    <a target="_blank" href="https://infinitemagazine.mit.edu/" rel="noreferrer">Infinite Magazine ♾️👕</a>
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/diegoatethedrummer/" rel="noreferrer">D.A.D. 🎸🥁</a>
                    <br></br>
                </p>
                <br></br>
                <br></br>

                <p className='PangramCompact'>CURRENT OBSESSIONS...</p>
                <p>
                  game dev, threejs, <a target="_blank" href="https://www.youtube.com/@blaccmassxx" rel="noreferrer">blaccmass remixes</a> 

                    
                    ,
                    Three Body Problem, Wii Golf, Dr. K, watermelon, Overcooked
                    <br></br>
                    <br></br>

                </p>

                <div style={{"opacity":".5"}}>
                  <p className='PangramCompact'>OBSESSIONS ARCHIVE...</p>
                  <p>
                      mango sticky rice, Conductor Williams instrumentals, puzzles, Dune, the olympics, cooking, mummy_joe (instagram page), jookin (dance style), Attack on Titan, Pocket Operators, Denzel Curry, sports betting models, Kendrick, orange chicken, Julian DeGuzman, MPC drum machine, Formula 1, buffalo wings, Avatar TLA, collaging, Rosalia, NCT 127, Hamilton
                  </p>

                </div>
                
            </div>


              <div className='splitDiv rightSplit'>
                  <img id="profHideOnMobile" src={profilePic} style={{"width":"100%"}} alt="diego's face"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h3>Contact Me!</h3>
                  <br></br>

                  <p><strong>EMAIL / </strong>hi.diegoyl@gmail.com</p>
                  <p><strong>LINKEDIN / </strong><a href="https://www.linkedin.com/in/diego-yanez-laguna/" target="_blank">linkedin.com/in/diego-yanez-laguna/</a></p>
                  <p><strong>INSTA / </strong><a href="https://www.instagram.com/tryingtryiing/" target="_blank">@tryingtryiing</a></p>
                  <p><strong>GITHUB / </strong><a href="https://github.com/diegoyl/" target="_blank">@diegoyl</a></p>
              
              </div>
            
            </div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(About);
