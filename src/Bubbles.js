import './App.css';
import './Bubbles.css';
import React, {useState, useEffect} from 'react';
import Guppy from "./img/guppySMOL-BLUE.png"


function Bubbles({active, resetBubbles}) {
    console.log("Hi Im Bubbles! I am ", active)
    var [bubbling, setBubbling] = useState(false)
    var [mouse, setMouse] = useState()

    function createBubble () {
        const container = document.getElementById("bubblesContainer")
        const createElement = document.createElement('span')

        var size = Math.random() * 100 + 20;
        createElement.style.width = size + "px";
        createElement.style.height = size + "px";
        
        // createElement.style.left = (Math.random() * (window.innerWidth+size*2) - size*2) +  "px"
        
        var posX = mouse["x"];
        var posY = mouse["y"];
        createElement.style.left = posX +  "px"
        createElement.style.top = posY +  "px"

        container.appendChild(createElement)
        // console.log("====== added bubble")
        setTimeout(() => {
            createElement.remove()
        }, 500+Math.random()*6000)
    }

    var bubbleInterval = null
    function toggleBubbling() {
        console.log("checking toggleBubbling = ",bubbling)
        // if (!bubbling) {
        //     clearInterval(bubbleInterval)
        // } else {
        if (!bubbling) {
            console.log("start bubblies!!!")
            bubbleInterval = setInterval(createBubble, 100+Math.random()*200)
            console.log("...bublingg....")

            setTimeout(()=> {
                console.log("end of bubblies")
                clearInterval(bubbleInterval)
            },3000)

            // setBubbling(false)
            resetBubbles()

        }
        // setBubbling(!bubbling)
    }

    // toggleBubbling()
    
    function _onMouseMove(e) {
        setMouse({ x: e.screenX, y: e.screenY });
        console.log(e.screenX)
    }
    
  return (
    <div id="bubblesContainer" className="bubbleContainer" onMouseMove={_onMouseMove.bind(this)}>   

        {/* <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="transparent" stroke="red" stroke-width="10"/>
        </svg> */}

        <button onClick={() => {toggleBubbling()}}>
            create bubble
        </button>


    
    </div>
  );
}

export default Bubbles;
