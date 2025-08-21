import { useMouseMove, animate, useValue } from "react-ui-animate"
import React, {useState, useEffect} from 'react';

import Guppy from "./svg/Guppy.js"
import GuppyDeadSVG from "./svg/GuppyDeadSVG.js"

function GuppyCursor({updateGuppyPosition, guppyAlive, guppyTransitionClass}) {
    
    const xDot = useValue(0)
    const yDot = useValue(0)
    // console.log("\trerender")

    const initW = window.innerWidth
    const initY = window.innerHeight
    const mx = useValue(initW*.5)
    const my = useValue(initY*.55)

    const x = useValue(initW*1.12)
    const y = useValue(initY*.43)
    const angle = useValue(0)
    const iAc = -5 // initial accel
    const flipBufferAcc = .02
    const xAcc = useValue(iAc)
    const yAcc = useValue(iAc)
    var xAccPrev = [iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc]
    var yAccPrev = [iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc]
    var angPrev = [0,0,0,0]
    var cycleJumps = 0
    const flip = useValue("100%")
    const maxAcc = 7
    const minDist = 30
    
    var t = 0
    const WOBBLE = 50
    var FLOATATE = .3


    const average = array => array.reduce((a, b) => a + b) / array.length;


    useMouseMove(({mouseX, mouseY}) => {
         mx.value = mouseX;
         my.value = mouseY;
    })

    setInterval (animateCursor, 40);

    function animateCursor() {
      t += 1 
      if (t >359) {
        t = 0
        FLOATATE = FLOATATE*-1
      }

      var centerW = document.getElementById("animateDivGC").clientWidth;
      var centerH = document.getElementById("animateDivGC").clientHeight;
      var deltaX = mx.value.value - x.value.value - centerW/2;
      var deltaY = my.value.value - y.value.value - centerH/2;;



      // FOR REALLY CLOSE TO MOUSE, REDUCE MOTION ///////////////
        //REGULAR
      if ((deltaX**2 + deltaY**2)**.5 > 60) {
        var angRaw = Math.atan(deltaY/deltaX) * 180/Math.PI
        var angAdjust = 0 // for normalizing to 0-360 instead of -90 to 90 on both halves
        flip.value = "100%"

        if (deltaX < 0)  {  // LEFT +180
          angAdjust = 180 + (360 * cycleJumps)
          flip.value = "-100%"
        } else {            // RIGHT +0 or +360
          if (deltaY < 0)  { // UP +360
            angAdjust = 360 + (360 *  cycleJumps)
          }
        } // if right down leave it at 0

        angRaw += angAdjust

        // 0 TO 360 BREAK
        var lastAng = angPrev[angPrev.length - 1]
        var lastDif = Math.abs(lastAng - angRaw)
        if (lastDif >= 300) {
          if (angRaw < lastAng) {
            angRaw += 360
          } else if (angRaw > lastAng) {
            angRaw += -360
          }
        }


        // console.log(angRaw.toFixed(0), " <= ",lastAng, "  cjbase: ",360*cycleJumps)

  
        angPrev.shift();
        angPrev.push(angRaw);
        var regressedVal = average(angPrev)
        angle.value = regressedVal
        
        cycleJumps = Math.floor((regressedVal) / 360)

        //// buffers so it doesnt flip back and forth super rapidly
        // if (deltaX < 0) {

        //   if (xAcc.value.value < -flipBufferAcc ){
        //     flip.value = "-100%"
        //   }
          
        // } else {
          
        //   if (xAcc.value.value > flipBufferAcc ){
        //     flip.value = "100%"
        //   }
        // }

      } 
        //CLOSE
      else {
        // console.log("close")
        angle.value = angle.value.value + FLOATATE
      }


      var xAccRaw = deltaX  + Math.sin(3.3*t/360 * Math.PI) * WOBBLE/2 -WOBBLE/4
      var yAccRaw = deltaY  + Math.sin(.5*t/360 * Math.PI) * WOBBLE -WOBBLE/2

      xAccPrev.shift();
      xAccPrev.push(xAccRaw);

      yAccPrev.shift();
      yAccPrev.push(yAccRaw);

      xAcc.value = (average(xAccPrev) / 500) * maxAcc 
      yAcc.value = (average(yAccPrev) / 500) * maxAcc 

      // console.log(average(xAccPrev).toFixed(0), " | ",average(yAccPrev).toFixed(0))

      x.value = x.value.value + xAcc.value.value;
      y.value = y.value.value + yAcc.value.value;

      let xCenter = x.value.value + (document.getElementById("animateDivGC").clientWidth)/2
      let yCenter = y.value.value + (document.getElementById("animateDivGC").clientHeight)/2
      xDot.value = xCenter
      yDot.value = yCenter
      updateGuppyPosition([xCenter, yCenter])
  };
    
  return (
    
    
    <animate.div
    id="animateDivGC"
    className={guppyTransitionClass+" animateDiv"}
    style={{
        width: "10em",
        aspectRatio: "1261/652",
        position: "fixed",
        top: 0,
        left: 0,
        translateX: x.value,
        translateY: y.value,
        rotate: angle.value,
        scaleY: flip.value,
        zIndex: 900,
    }}
  >

    {guppyAlive ? <Guppy /> : <GuppyDeadSVG />}
    
  </animate.div>
  
  
  )
}

export default GuppyCursor;
