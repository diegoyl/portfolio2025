import { useMouseMove } from "react-ui-animate"
import './Bubbles.css';

function BubbleCursor() {
    var lastX = 0
    var lastY = 0
    var dist_thresh = 30
    
    var T_RATE = 10
    var t = T_RATE

    function createBubble (mx, my) {
        const container = document.getElementById("bubblesContainer")
        const newBubble = document.createElement('span')

        var size = Math.random() * 70 + 8;
        newBubble.style.width = size + "px";
        newBubble.style.height = size + "px";
        
        
        var posX = mx;
        var posY = my;
        newBubble.style.left = posX +  "px"
        newBubble.style.top = posY +  "px"

        container.appendChild(newBubble)
        // console.log("====== added bubble at ",mx," , ",my)
        setTimeout(() => {
            newBubble.remove()
        }, Math.min( 300  + (Math.random()*12000) / ((size**.5)/2) , 6000) )
        // }, 11000)
    }


  function quadratic(x1, y1, x2, y2 ) {
    var dx = x1 - x2
    var dy = y1 - y2
    var sum = dx**2 + dy**2
    var root = sum**.5
    return root
  }

  useMouseMove(({mouseX, mouseY}) => {
        t += 1;
        // console.log(t)

        if (t > T_RATE) {
            // createBubble(mouseX, mouseY)
            var quad_dist = quadratic(lastX, lastY, mouseX, mouseY)
            if (quad_dist > dist_thresh) {
                createBubble(mouseX, mouseY)
            }
            lastX = mouseX
            lastY = mouseY
            t = 0
        }
  });
    
  return (
    <div
        id="bubblesContainer"
        className="bubbleContainer"
    >
    </div>
  )
}

export default BubbleCursor;
