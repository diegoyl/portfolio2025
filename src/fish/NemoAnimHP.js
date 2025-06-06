import { animate, useValue } from "react-ui-animate"
import React, {useState} from 'react';

import NemoSVG from "../svg/NemoSVG.js"

function NemoAnimHP({speed_param, size_param}) {  
    const initW = window.innerWidth
    const initY = window.innerHeight
    const x = useValue(initW*-2) // SET INIT POS
    const y = useValue(initY*2) // SET INIT POS

    const fishSpeed = speed_param // x speed constant, just flips direction
    const xAcc = useValue(-fishSpeed)
    const yAcc = useValue(0)
    const ySinPath = useValue(-3)

    const angle = useValue(-6)
    const flip = useValue("100%")
    
    var t = 0
    const WOBBLE = 5


    // ANIMATION RATE
    setInterval (animateFish, 100);

    const outsideOffset = 800
    const leftBound = -outsideOffset
    const rightBound = initW+outsideOffset
    const topBound = -outsideOffset
    const bottomBound = initY+outsideOffset
    const initOffset = 20

    let [nemoPopupActive, setNemoPopupActive] = useState(false)
    let [nemoPopupClass, setNemoPopupClass] = useState("")
    function showNemoPopup(show) {
        if (show) {
            setNemoPopupActive(true)
            setTimeout(() => {
                showNemoPopup(false)
            },2500)
        } else {
            setNemoPopupClass("startNPfade")
            setTimeout(() => {
              setNemoPopupActive(false)
              setNemoPopupClass("")
            },600)

        }
    }


    function animateFish() {
      // T COUNTER
      t += 1 
      if (t >359) {
        t = 0
      }


      // CHECK BOUNDS
      let outsideX = x.value.value < leftBound || x.value.value > rightBound
      let outsideY = y.value.value < topBound || y.value.value > bottomBound
      if (outsideX || outsideY) {
        ySinPath.value = Math.random()*2 - 1
        y.value = initY * (Math.random()*0.2 + 0.4) // set to middle
        if (xAcc.value.value < 0) { //going left, siwtch to right
          xAcc.value = fishSpeed // positive direction
          x.value = leftBound + initOffset // SET INIT POS
          flip.value = "-100%"
        } else {
           xAcc.value = -fishSpeed // positive direction
           x.value = rightBound - initOffset // SET INIT POS
           flip.value = "100%"
        }
        return
      }



      // UPDATE ANGLE
      var baseAngle = 180
      if (xAcc.value.value < 0 ) {
        baseAngle = 0
      }
    //   angle.value = baseAngle + ( Math.sin(3*t/360 * Math.PI) * 10) 

      // UPDATE Y ACC
      var yAccRaw = ( Math.sin(10*t/360 * Math.PI) * -.6)  + ( Math.sin(1*t/360 * Math.PI) * ySinPath.value.value)
      yAcc.value = yAccRaw

      // UPDATE POSITION
      x.value = x.value.value + xAcc.value.value;
      y.value = y.value.value + yAcc.value.value;

  };
    
  return (
    <>
    
    
    
        <animate.div
            id="animateDivNemoHP"
          className="animateDiv"
            style={{
                width: size_param,
                aspectRatio: "4001.12/1446.24",
                position: "fixed",
                top: 0,
                left: 0,
                translateX: x.value,
                translateY: y.value,
                rotate: angle.value,
                scaleX: flip.value,
                zIndex: 800,
                pointerEvents: "all"
            }}
            onClick={() => {showNemoPopup(true)}}
        >

            <NemoSVG size_param={size_param} class_param={"clickableFish"} />

        </animate.div>
            
        <div className={nemoPopupActive ? nemoPopupClass+" nemoPopupActive nemoPopupContainer" : "nemoPopupContainer"}>
            
            <div className="nemoPopup">
                <p id="fntxt">YOU FOUND NEMO!</p>
                <NemoSVG size_param={"95%"} class_param="foundNemo" />
            </div>
        </div>
    </>
  
  
  )
}

export default NemoAnimHP;
