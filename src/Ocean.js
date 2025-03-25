import './App.css';
import './Ocean.css';
import GuppyCursor from './GuppyCursor';
import BubbleCursor from './BubbleCursor';
import SharkAnim from './fish/SharkAnim';
import DoryAnim from './fish/DoryAnim';
import NemoAnim from './fish/NemoAnim';


import React, {useState, useEffect} from 'react';

function Ocean() {

  var [erasing, setErasing] = useState(false)
  function redirectDelay(path, category) {
    setErasing(true)
    setTimeout(() => {
      // window.location.href = path+"?categ="+category;
      window.location.href = path+"-"+category;
    }, 310)
  }

  var [loaded, setLoaded] = useState(false)


  useEffect(() => {
    document.title = "OCEAN"
    setLoaded(true)
    
  
    var bubbleGenInterval = setInterval(createBubbleHome, 100)
    setTimeout(() => {
      clearInterval(bubbleGenInterval)
    }, 2000)
     
    
  },[])

  

  function createBubbleHome () {
    const container = document.getElementById("initBubbleGenerator")
    const newBubble = document.createElement('span')

    var size = Math.random() * 110 + 10;
    newBubble.style.width = size + "px";
    newBubble.style.height = size + "px";
    
    var posX = Math.random() * (window.innerWidth + 2*size) - size;
    var posY = window.innerHeight + size - 10;
    newBubble.style.left = posX +  "px"
    newBubble.style.top = posY +  "px"

    console.log("\t\tBubble Added")
    container.appendChild(newBubble)
    setTimeout(() => {
        newBubble.remove()
    }, 1000+Math.random()*5000)
  }

  

  return (
    <div className="" id="homeContainer">

      <div id="load-container" className={loaded ? "removeErase transition-container":"transition-container"}>
            <p></p>
      </div>
      <div id="erase-container" className={erasing ? "beginErase":""}>
        <p>...</p>
      </div>
      <div id="initBubbleGenerator" className='bubbleContainer'></div>
     
      <BubbleCursor />
      <GuppyCursor />
      <SharkAnim speed_param={4} size_param={"60em"} />
      <SharkAnim speed_param={14} size_param={"9em"} />

      <DoryAnim speed_param={4} size_param={"10em"} />
      <DoryAnim speed_param={2} size_param={"8em"} />
      <DoryAnim speed_param={11} size_param={"4em"} />

      <NemoAnim speed_param={6} size_param={"10em"} />
      <NemoAnim speed_param={9} size_param={"8em"} />
      <NemoAnim speed_param={3} size_param={"6em"} />
      <NemoAnim speed_param={17} size_param={"3.5em"} />


    </div>
  );
}

export default Ocean;
