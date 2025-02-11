import { useMouseMove, animate, useValue } from "react-ui-animate"

import Guppy from "./svg/Guppy.js"

function GuppyCursor({page}) {
    // var [x, setX] = useState(0)
    // var [y, setY] = useState(0)
    const x = useValue(0)
    const y = useValue(0)
    const angle = useValue(0)
    const xAcc = useValue(0)
    const yAcc = useValue(0)

    useMouseMove(({mouseX, mouseY}) => {
        var deltaX = mouseX - x.value;
        var deltaY = mouseY - y.value;
        var pr = Math.PI
        angle.value = Math.atan(deltaY/deltaX) * 180/Math.PI
        // angle.value = mouseX
        console.log(pr)
    });

    
  return (
    <animate.div
    style={{
        width: "10em",
        aspectRatio: "1261/652",
        border: "red 2px solid",
        position: "fixed",
        bottom: 0,
        right: 0,
        translateX: x.value,
        translateY: y.value,
        rotate: angle.value,
    }}
  >

    <Guppy />

  </animate.div>
  
  
  )
}

export default GuppyCursor;
