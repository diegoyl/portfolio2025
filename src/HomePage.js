import './App.css';
import './HomePage.css';
import transition from './transition.js';
import Guppy from './svg/Guppy';
import GuppyCursor from './GuppyCursor';
import SharkAnimHP from './fish/SharkAnimHP';
import NemoAnimHP from './fish/NemoAnimHP';
import BubbleCursor from './BubbleCursor';
import React, {useState, useRef, useEffect} from 'react';
import profSquare from './img/prof-square.jpg';
import workThumb1 from './img/project/footwork/thumb.jpg';
import workThumb2 from './img/project/clock/thumb.jpg';
import workThumb3 from './img/project/squish/thumb.jpg';
import workThumb4 from './img/project/mitgala/thumb.jpg';
import workThumb5 from './img/project/forting/thumb.jpg';
import workThumb6 from './img/project/beatfarm/thumb.jpg';
import workThumb7 from './img/project/tactical-type/thumb.jpg';
import workThumb8 from './img/project/tangible-sampling/thumb.jpg';
import workThumb9 from './img/project/21m080/thumb.jpg';
import workThumb10 from './img/project/infinite-merch/thumb.jpg';
import workThumb11 from './img/project/honest-type/thumb.jpg';

function HomePage() {

  var [erasing, setErasing] = useState(false)
  var [hoverImage, setHoverImage] = useState(null)
  var [hoverType, setHoverType] = useState(null)
  var [workImageIndex, setWorkImageIndex] = useState(0)
  var [imagesLoaded, setImagesLoaded] = useState(false)
  
  // Work images to cycle through
  const workImages = [
    workThumb1,
    workThumb2,
    workThumb3,
    workThumb4,
    workThumb5,
    workThumb6,
    workThumb7,
    workThumb8,
    workThumb9,
    workThumb10,
    workThumb11
  ]
  
  function redirectDelay(path, category) {
    setErasing(true)
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }
  
  function handleWorkHover() {
    setHoverType('work')
    setHoverImage(workImages[0])
    setWorkImageIndex(0)
  }
  
  function handleAboutHover() {
    setHoverType('about')
    setHoverImage(profSquare)
  }
  
  function handleHoverEnd() {
    setHoverImage(null)
    setHoverType(null)
  }
  
  // Preload all work images
  function preloadImages() {
    const imagePromises = workImages.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(src)
        img.onerror = () => reject(src)
        img.src = src
      })
    })
    
    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true)) // Continue even if some fail
  }

  var [loaded, setLoaded] = useState(false)


    useEffect(() => {
    document.title = "Diego Yañez-Laguna"
    setLoaded(true)
    
    // Preload work images
    preloadImages()
    
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
  
  // Cycle through work images when hovering
  useEffect(() => {
    if (hoverType === 'work' && imagesLoaded) {
      const interval = setInterval(() => {
        setWorkImageIndex(prev => {
          const nextIndex = (prev + 1) % workImages.length
          setHoverImage(workImages[nextIndex])
          return nextIndex
        })
      }, 400) // Change image every 400ms
      
      return () => clearInterval(interval)
    }
  }, [hoverType, imagesLoaded])

  
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
      
      {/* Hover Image Display */}
      {hoverImage && (
        <div className="hoverImageContainer">
          <img 
            src={hoverImage} 
            alt="Hover preview" 
            className="hoverImage"
          />
        </div>
      )}
           

      <p className='PangramDisplay floatUp' id="wavy-name" style={{"--j":1}}>
        <span style={{"--i":1}}>D</span>
        <span style={{"--i":2}}>I</span>
        <span style={{"--i":3}}>E</span>
        <span style={{"--i":4}}>G</span>
        <span style={{"--i":5}}>O</span>
        <span style={{"--i":6, width:".1em"}}> </span>
        <span style={{"--i":7}}>Y</span>
        <span style={{"--i":8, "marginLeft":"-.08em"}}>A</span>
        
        <span style={{"--i":9, "marginLeft":"-.01em"}} id="enye">
            <span id="ene">N</span>
            <span id="tilde">~</span>
        </span>

        <span style={{"--i":10, "marginLeft":"-.033em"}}>E</span>
        <span style={{"--i":11, "marginLeft":".03em"}}>Z</span>
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

          Hi, I’m Diego! I love making things, experimenting, and learning new things along the way. I graduated from MIT, where I took classes on design, computer science, mechanical engineering, and music!
          <br></br>
          <br></br>
          I am currently a UI/UX Intern at Next Play Games and also working on some UX/webdev side projects.
           Feel free to reach out if you want to work together on anything! 
          <br></br>
        </p>
      </div>

      
      

      
      <div className="floatUp hplC" style={{"--j":3}}>
        <div 
          onClick={() => {redirectDelay("/work","")}} 
          onMouseEnter={handleWorkHover}
          onMouseLeave={handleHoverEnd}
          className="homeProjLink" 
          style={{"--i":1}}
        >
            <p>WORK</p>
        </div>
      </div>
      
      <div className="floatUp hplC" style={{"--j":4}}>
        <div 
          onClick={() => {redirectDelay("/about","")}} 
          onMouseEnter={handleAboutHover}
          onMouseLeave={handleHoverEnd}
          className="homeProjLink" 
          style={{"--i":2}}
        >
            <p>ABOUT</p>
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
