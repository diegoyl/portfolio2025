import './App.css';
import './Footer.css';
import React, {useState, useEffect} from 'react';


function Footer({page}) {
  var [activeBubbles, setActiveBubbles] = useState(false)
  var [erasing, setErasing] = useState(false)

  function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    console.log("CLICKING & STARTING")
    setActiveBubbles(true)
  }
  function resetBubbles() {
    setActiveBubbles(false)
    console.log("I GOT RESET")
  }

  function redirectDelay(path) {
    setErasing(true)
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }


  return (
    <footer id="footer" className="">
        <div id="erase-container" className={erasing ? "beginErase transition-container":"transition-container"}>
            {/* <p>...</p> */}
        </div>
        {/* <Bubbles active={activeBubbles} resetBubbles={resetBubbles}></Bubbles> */}

        <div className="footer-links">
          <p onClick={() => toTop()} id="toTop" className='bigFooterText'>⌃<br></br>SWIM TO TOP</p>
        </div>
        
        <div className="footer-links">
          <div onClick={() => {redirectDelay("/projects")}} >
                <p className="bigFooterText" id="allProjects" >ALL PROJECTS</p>
          </div>
        </div>

        <div className="footer-links footer-grid3">
            <a className='bigFooterText' target="_blank" href="https://www.instagram.com/tryingtryiing/" >
                INSTAGRAM
            </a>

            <a className='bigFooterText' target="_blank" href="https://www.github.com/diegoyl/" >
                GITHUB
            </a>
            <a className='bigFooterText' target="_blank" href="https://www.linkedin.com/in/diego-yanez-laguna/" >
                LINKEDIN
            </a>
        </div>


        <br></br>
        <br></br>
        <br></br>

        <br></br>
            <br></br>
      {/* <div id="createdwith">
              <span>Created with </span>

              <span className='stLine' >
                  <span className="stText"> Adobe Potrfolio </span>  
              </span>

              <span> lots of love &lt;3</span>

      </div> */}

      <br></br>

        <div className="footer-links">
          <div onClick={() => {redirectDelay("/ocean")}} >
                <p className="bigFooterText" id="swimInOcean" >🌊 OCEAN 🌊</p>
          </div>
        </div>
    
        <br></br>
        <br></br>

    </footer>
  );
}

export default Footer;
