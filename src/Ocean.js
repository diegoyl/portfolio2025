import './App.css';
import './Ocean.css';
import GuppyCursor from './GuppyCursor';
import BubbleCursor from './BubbleCursor';
import SharkAnim from './fish/SharkAnim';
import SharkAnimHP from './fish/SharkAnimHP';
import DoryAnim from './fish/DoryAnim';
import NemoAnim from './fish/NemoAnim';


import React, {useState, useRef, useEffect} from 'react';

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

  let [sharkPos, setSharkPos] = useState([0,0])
  

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

  
  //////////////////////////////////////
  // SHARK TRACKING //////////////////
  //////////////////////////////////////
  console.log("HOME RE_RENDERING")
  const sharkXY = useRef([0,0]); // Stores position without triggering re-renders
  const guppyXY = useRef([1000,1000]); // Stores position without triggering re-renders
  const [triggerCollisionUpdate, setTriggerCollisionUpdate] = useState(false); // Controls re-render when needed
  let [guppyAlive, setGuppyAlive] = useState(true)
  let [guppyTransitionClass, setGuppyTransitionClass] = useState("")


  const updateSharkPosition = (newPosArr) => {
    sharkXY.current = newPosArr;
    if (guppyAlive){
      checkSharkCollision(newPosArr);
    }
  };
  const updateGuppyPosition = (newPosArr) => {
    // console.log(guppyAliveRef.current)
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
      setGuppyAlive(false)
      setGuppyTransitionClass("initRipTransition ripTransition")

      setTimeout(() => {
        setGuppyTransitionClass(" ripTransition")
      },100)

      setTimeout(() => {
        setGuppyTransitionClass("")
        setTimeout(() => {
          setGuppyAlive(true)
        },300)
      },2500)

      
    }
    // if (newPos.x > 500 || newPos.y > 500) {
    //   setTriggerCollisionUpdate(prev => !prev); // Toggle state to trigger re-render
    // }
  }

  return (
    <div className="" id="oceanContainer">

      <div id="load-container" className={loaded ? "removeErase transition-container":"transition-container"}>
            <p></p>
      </div>
      <div id="erase-container" className={erasing ? "beginErase":""}>
        <p>...</p>
      </div>
      <div id="initBubbleGenerator" className='bubbleContainer'></div>
     
      <BubbleCursor />

      <GuppyCursor updateGuppyPosition={updateGuppyPosition} guppyAlive={guppyAlive} guppyTransitionClass={guppyTransitionClass}/>

      <SharkAnimHP speed_param={4} size_param={"60em"} updateSharkPosition={updateSharkPosition}/>
      {/* <SharkAnim speed_param={4} size_param={"60em"} updateSharkPosition={updateSharkPosition}/> */}
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