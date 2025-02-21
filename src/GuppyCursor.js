import { useMouseMove, animate, useValue } from "react-ui-animate"

import Guppy from "./svg/Guppy.js"

function GuppyCursor() {
  
    const initW = window.innerWidth
    const initY = window.innerHeight
    const mx = useValue(initW*.5)
    const my = useValue(initY*.55)

    const x = useValue(initW*1.12)
    const y = useValue(initY*.43)
    const angle = useValue(0)
    const iAc = -5 // initial accel
    const xAcc = useValue(iAc)
    const yAcc = useValue(iAc)
    var xAccPrev = [iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc]
    var yAccPrev = [iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc,iAc]
    var angPrev = [0,0,0,0]
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

      var centerW = document.getElementById("animateDiv").clientWidth;
      var centerH = document.getElementById("animateDiv").clientHeight;
      var deltaX = mx.value.value - x.value.value - centerW/2;
      var deltaY = my.value.value - y.value.value - centerH/2;;



      // FOR REALLY CLOSE TO MOUSE, REDUCE MOTION ///////////////
        //REGULAR
      if ((deltaX**2 + deltaY**2)**.5 > 60) {
        var angRaw = Math.atan(deltaY/deltaX) * 180/Math.PI
        angPrev.shift();
        angPrev.push(angRaw);
  
        angle.value = average(angPrev)

        flip.value = "100%"
        if (deltaX < 0) {
          flip.value = "-100%"
        }
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

  };
    
  return (
    <animate.div
    id="animateDiv"
    style={{
        width: "10em",
        aspectRatio: "1261/652",
        // border: "red 2px solid",
        position: "fixed",
        top: 0,
        left: 0,
        translateX: x.value,
        translateY: y.value,
        rotate: angle.value,
        scaleX: flip.value,
        zIndex: 700,
    }}
  >

    <Guppy />

  </animate.div>
  
  
  )
}

export default GuppyCursor;
