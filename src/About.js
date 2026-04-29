import './App.css';
import './About.css';
import transition from './transition.js';
import NavBar from './NavBar';
import Footer from './Footer';
import React, {useEffect, useState, useCallback} from 'react';

import profilePic from './img/profilePic.jpeg';

const EMAIL = 'hi.diegoyl@gmail.com';


function About(props) {
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
      document.title = "About"
  },[])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // ignore — clipboard may be blocked
    }
  }, []);


  return (
    <div>
      <NavBar page={"about"}></NavBar>

        <div id="" className="aboutPage content-left content-margintop content-padding">

            <div className="splitGrid">
              <img id="profHideOnPC" src={profilePic} style={{"width":"100%"}} alt="diego's face"/>

              <div className='splitDiv leftSplit'>
                <h2>Hi, I'm Diego!</h2>

                <p>
                    I'm a developer and designer from Austin, TX. I majored in Design at MIT along with classes in computer science, mechanical engineering, and music. I build interactive web experiences and I care about making new technologies feel intuitive, accessible, and human. As a frontend developer, I balance design and technical needs, and I've also worked across UX and backend systems. I enjoy working through complex problems, learning new tools, and quickly building and iterating on ideas.

                    <br></br>
                    <br></br>

                    In my previous role, I did frontend development and UX design at The Radar Company. 
                    I am also contributing to <a target="_blank" 
                      href="https://github.com/theloni-monk/VitalVault/tree/main"
                      rel="noreferrer"
                      >VitalVault</a>
                    , an open-source app for faciliating medical document retrieval and organization.

                    <br></br>
                    <br></br>

                    Outside of work,I'm always exploring my interests through side projects so feel free to reach out if you want to collaborate on anything! Recently, it's been a mix of game development, Arduino experiments, random web apps, graphic design freelancing, and trying to get better at Blender. I spend the rest of my free time dancing (freeestyle hip-hop + house), making music (hip-hop + rock), and playing various sports.
                    
                    <br></br>
                    <br></br>
                    
                    Sometimes I post the stuff i make on the internet <span style={{"font-size":".5em"}}>(trying to get better at this...)</span>
                    
                    <br></br>

                    <span className="aboutIndentedLinks">
                    <a target="_blank" href="https://www.instagram.com/tryingtryiing/" rel="noreferrer">instagram - @tryingtryiing</a>
                    <br></br>
                    <a target="_blank" href="https://yegi.itch.io/" rel="noreferrer">itch.io</a>
                    </span>


                    <br></br>
                    <br></br>
                    <br></br>
                    
                    These are some groups I have been a part of: 
                    <br></br>
                    <span className="aboutIndentedLinks">
                    <a target="_blank" href="https://www.instagram.com/mitridonkulous/" rel="noreferrer">Donk 🕺</a>
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/_movementality/" rel="noreferrer">MMT 🕺</a> 
                    <br></br>
                    <a target="_blank" href="https://infinitemagazine.mit.edu/" rel="noreferrer">Infinite Magazine ♾️👕</a>
                    <br></br>
                    <a target="_blank" href="https://www.instagram.com/diegoatethedrummer/" rel="noreferrer">D.A.D. 🎸🥁</a>
                    <br></br>
                    </span>
                </p>
                <br></br>
                <br></br>


                <p>
                  <span className='PangramHeaderItalic' >CURRENT OBSESSIONS...</span><br></br>  

                  game dev, figure skating, Ovrkast, card magic, threejs, <a target="_blank" href="https://www.youtube.com/@blaccmassxx" rel="noreferrer">blaccmass</a> 
                    , Three Body Problem, watermelon
                    <br></br>

                </p>

                <div style={{"opacity":".4"}}>
                  <p style={{"font-size":".66em"}}>
                    <span style={{"font-size":"1.5em"}} className='PangramHeaderItalic' >OBSESSIONS ARCHIVE: </span>
                    Zelda OST, Overcooked, mango sticky rice, Wii Golf, Conductor Williams instrumentals, puzzles, Dune, the olympics, 
                    cooking, <a target="_blank" href="https://www.youtube.com/@MummyJoe" rel="noreferrer">mummy joe</a>, 
                    memphis jookin, attack on titan, pocket operators, Saba, golf course architecture,Denzel Curry, sports betting models, Kendrick, orange chicken, Julian DeGuzman, MPC drum machine, Formula 1, buffalo wings, Avatar TLA, collaging, Rosalia, NCT 127, Hamilton
                  </p>

                </div>
                
            </div>


              <div className='splitDiv rightSplit'>
                  <img id="profHideOnMobile" src={profilePic} style={{"width":"100%"}} alt="diego's face"/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <h3>Contact Info</h3>
                  <br></br>

                  <p>
                    <strong>EMAIL / </strong>
                    <button
                      type="button"
                      className="aboutEmailCopy"
                      onClick={copyEmail}
                      title="Copy email"
                      aria-label={emailCopied ? 'Email copied to clipboard' : `Copy ${EMAIL} to clipboard`}
                    >
                      {EMAIL}
                    </button>
                    <span>
                      {emailCopied ? (
                        <span className="aboutEmailCopyFeedback" style={{fontFamily: "PangramDisplay"}} aria-live="polite"> COPIED</span>
                      ) : null}
                    </span>
                  </p>
                  <p><strong>LINKEDIN / </strong><a href="https://www.linkedin.com/in/diego-yanez-laguna/" target="_blank">linkedin.com/in/diego-yanez-laguna/</a></p>
                  <p><strong>GITHUB / </strong><a href="https://github.com/diegoyl/" target="_blank">@diegoyl</a></p>
              
              </div>
            
            </div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(About);
