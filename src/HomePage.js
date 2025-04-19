import './App.css';
import './HomePage.css';
import transition from './transition.js';
import Guppy from './svg/Guppy';
import GuppyCursor from './GuppyCursor';
import SharkAnimHP from './fish/SharkAnimHP';
import NemoAnimHP from './fish/NemoAnimHP';
import BubbleCursor from './BubbleCursor';
import React, {useState, useRef, useEffect} from 'react';

function HomePage() {
  console.log("**** HOME RE-RENDER")

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
    document.title = "Diego Yañez-Laguna"
    setLoaded(true)
    
  
    var bubbleGenInterval = setInterval(createBubbleHome, 100)
    setTimeout(() => {
      clearInterval(bubbleGenInterval)
    }, 2000)
     
    
    // console.log("Rotating? ", rotatingInterval)
    // if (!rotatingInterval) {
    //   console.log("\t\tSETTING ROTTATING INTERVAL")
    //   rotatingInterval = setInterval(() => {
    //     updateRotWord()
    //   }, 4000)
    // } 
  },[])

  
  // var [rotatingWord, setRotatingWord] = useState(["designer",4])
  // var rotatingInterval = false
  // var rotWordCt = 0

  // function updateRotWord () {
  //   rotWordCt += 1;
  //   if (rotWordCt >= rotWords.length) { rotWordCt = 0 }
    
  //   var newWord = rotWords[rotWordCt]
  //   var newWidth = rotWordWidths[newWord]

  //   document.getElementById("rotatingWord").classList.add('rotFade'); // start animation            

  //   setTimeout(() => {
  //     document.getElementById("rotatingWord").classList.remove('rotFade');
  //     setRotatingWord( [ newWord , newWidth ] );
  //   },505)

  // }
  

  //////////////////////////////////////
  // SHARK TRACKING //////////////////
  //////////////////////////////////////
  const sharkXY = useRef([0,0]); // Stores position without triggering re-renders
  const guppyXY = useRef([1000,1000]); // Stores position without triggering re-renders
  const guppyAlive = useRef(true); // Stores position without triggering re-renders
  
  const [triggerCollisionUpdate, setTriggerCollisionUpdate] = useState(false); // Controls re-render when needed
  // let [guppyAlive, setGuppyAlive] = useState(true)
  let [guppyTransitionClass, setGuppyTransitionClass] = useState("")

  const updateSharkPosition = (newPosArr) => {
    sharkXY.current = newPosArr;
    if (guppyAlive.current){
      checkSharkCollision(newPosArr);
    }
  };
  const updateGuppyPosition = (newPosArr) => {
    guppyXY.current = newPosArr;
  };

  var COLLISION_THRESHOLD = 100;
  function checkSharkCollision(posArr) {
    const sharkX = posArr[0]
    const sharkY = posArr[1]
    const guppyX = guppyXY.current[0]
    const guppyY = guppyXY.current[1]

    var deltaX = sharkX - guppyX;
    var deltaY = sharkY - guppyY;
    var dist = (deltaX**2 + deltaY**2)**.5
    
    // console.log("dist: ",dist, "  < ",COLLISION_THRESHOLD.toFixed(0))
    if (dist < COLLISION_THRESHOLD) {
      guppyAlive.current = false
      setGuppyTransitionClass("initRipTransition ripTransition")

      setTimeout(() => {
        setGuppyTransitionClass(" ripTransition")
      },100)

      setTimeout(() => {
        setGuppyTransitionClass("")
        setTimeout(() => {
          guppyAlive.current = true
          setTriggerCollisionUpdate(prev => !prev); // Toggle state to trigger re-render
        },300)
      },2500)
      
    }
    // if (newPos.x > 500 || newPos.y > 500) {
    // }
  }


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

  // const rotWords = [
  //   "designer",
  //   "programmer",
  //   "engineer",
  //   "tinkerer",
  //   "designer",
  //   "artist",

  //   "programmer",
  //   "tinkerer",
  //   "designer",
  //   "musician",
  //   "engineer",
  //   "dancer",
  // ]
  // const rotWordWidths = {
  //   "designer": 4.1,
  //   "programmer": 5.5,
  //   "engineer": 4.2,
  //   "tinkerer": 3.7,
  //   "musician": 4.2,
  //   "artist": 2.8,
  //   "dancer": 3.3
  // }
  

  return (
    <div className="" id="homeContainer">

      <div id="load-container" className={loaded ? "removeErase transition-container":"transition-container"}>
            <p></p>
      </div>
      <div id="erase-container" className={erasing ? "beginErase":""}>
        <p>...</p>
      </div>
      <div id="initBubbleGenerator" className='bubbleContainer'></div>
     
     

      <p className='PangramDisplay floatUp' id="wavy-name" style={{"--j":1}}>
        <span style={{"--i":1}}>D</span>
        <span style={{"--i":2}}>I</span>
        <span style={{"--i":3}}>E</span>
        <span style={{"--i":4}}>G</span>
        <span style={{"--i":5}}>O</span>
        <span style={{"--i":6, width:".1em"}}> </span>
        <span style={{"--i":7}}>Y</span>
        <span style={{"--i":8, "margin-left":"-.08em"}}>A</span>
        
        <span style={{"--i":9, "margin-left":"-.01em"}} id="enye">
            <span id="ene">N</span>
            <span id="tilde">~</span>
        </span>

        <span style={{"--i":10, "margin-left":"-.033em"}}>E</span>
        <span style={{"--i":11, "margin-left":".03em"}}>Z</span>
        <span id="hyphen" style={{"--i":12}}>-</span>
        <span style={{"--i":13}}>L</span>
        <span style={{"--i":14}}>A</span>
        <span style={{"--i":15}}>G</span>
        <span style={{"--i":16}}>U</span>
        <span style={{"--i":17}}>N</span>
        <span style={{"--i":18}}>A</span>
      </p>

      <div className='floatUp' style={{"--j":2.5}}>


        <p id="home-bio" >

          Hi, I’m Diego! I love making things, experimenting, and learning new things along the way. I recently graduated from MIT, where I took classes on design, computer science, mechanical engineering, and music!
          <br></br>
          <br></br>
          My projects are roughly categorized below (most of them overlap). Feel free to reach out if you want to work together on anything! 
          <br></br>
          <br></br>

          <p style={{fontSize:".7em",  maxWidth:"500px", "margin":"0 auto", "opacity":".5"}}>
          Also, I made this website in React and haven't found any bugs yet, but there are some experiments going on, so lmk if you find one...
          <br></br>
          <br></br>
          </p>


        </p>
      </div>

      
      
      <br></br>

      
      <div className="floatUp hplC" style={{"--j":3}}>
        <div onClick={() => {redirectDelay("/projects","design")}} className="homeProjLink" style={{"--i":1}}>
            <p>DESIGN</p>
        </div>
      </div>
      
      <div className="floatUp hplC" style={{"--j":4}}>
        <div onClick={() => {redirectDelay("/projects","engineering")}} className="homeProjLink" style={{"--i":2}}>
            <p>ENGINEERING</p>
        </div>
      </div>
      
      <div className="floatUp hplC" style={{"--j":5}}>
        <div onClick={() => {redirectDelay("/projects","coding")}} className="homeProjLink" style={{"--i":3}}>
            <p>CODING</p>
        </div>
      </div>



      {/* <Guppy classProp={"defaultGuppy homeGuppy"}></Guppy> */}
      <BubbleCursor />
      <GuppyCursor updateGuppyPosition={updateGuppyPosition} guppyAlive={guppyAlive.current} guppyTransitionClass={guppyTransitionClass}/>
      <SharkAnimHP speed_param={5} size_param={"35em"} updateSharkPosition={updateSharkPosition}/>
      <NemoAnimHP speed_param={7} size_param={"6em"} />


    </div>
  );
}

export default HomePage;
