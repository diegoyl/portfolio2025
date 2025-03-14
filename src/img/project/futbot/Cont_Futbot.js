import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import v_robot from "./robot.mp4"
import i_doritos from "./doritos.gif"
import i_kickingMechanism from "./kicking-mechanism.gif"
import i_cad0 from "./cad0.png"
import i_cad1 from "./cad1.png"
import i_cad2 from "./cad2.png"
import i_cad3 from "./cad3.png"
import i_gate1 from "./gate1.jpg"
import i_gate2 from "./gate2.jpg"
import i_gate3 from "./gate3.jpg"
import i_gate4 from "./gate4.png"
import i_kickingPart from "./kickingPart.png"
import i_render from "./render.gif"


function Cont_Futbot() {
  const projKey = "futbot"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Futbot"
            subtitle="Kicking robot for 2.007 competition"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Fabrication",
                        "Rapid Prototyping",
                        "CAD",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Fusion",
                        "SolidWorks",
                        "Arduino + Motors",
                        "Lathe",
                        "CNC Machining",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>



        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                2.007 is a mechanical engineering class at MIT where students build robots and compete against each other to see whose robot can score the most points.
                </p>
                <a href="https://sites.mit.edu/me-2007/" target="_blank">Class Site</a>

                <br></br>
                <br></br>
                <p>
                    My strategy was based on using a kicking mechanism to get balls into bins on the competition stage. Being able to kick balls to to the higher platform from the lower platform meant I didn't have to add extra motors and thicker wheels to go up the ramp. This saved weight and allowed my robot to go faster and collect more balls.
                </p>

                <p>
                    Futbot is actually made up of two bots. A small bot with wheels gathers balls and loads them into the kicking bot, which kicks the balls into buckets to gain points. It is mainly made of sheet metal and delrin rods that were cut on bandsaw or lathe.

                    The driving bot is controlled by a remote controller and the kicking mechanism is using arduino to control the motor.

                    The white foamboard box on the driving bot was for carrying a wooden stick that had to be placed into a hole on the gameboard.
                </p>

                
            </>} 
        ></ProjectSection>

        <Divider />
        
        <ProjectSection
            left={"Demo"} leftType=""
            right={<>
                <video 
                    src={v_robot} loop autoPlay muted
                ></video>
            </>}
        ></ProjectSection>

        <Divider />

        <ProjectSection
            left={"Kicking Bot"} leftType=""
            right={<>


                <p className=''>

                Early version of the kicking mechanism. The metal rod is attached to motor and rotates at a constant speed. The white delrin rod is fixed to the metal rod so it spins at the same rate. The delrin rod is needed to provide a secure attachment for the torsion spring, since it was difficult to attach the spring directly to the metal rod. 
                <br></br>
                <br></br>
                As the rod rotates the end of the torsion spring will get stuck against a block on the ground for a period of time until the torsion force becomes too large and it will snap forward past the block. This snapping action provides the kicking force and the ball just needs to be placed in front of where this happens. In this version I had a smaller compression spring at the end of the torsion spring to elongate the period that it is stuck, but later found that this wasn't necessary and it also wasn't very effective at transferring the force to the ball so I switched to a flatter end piece that slaps the ball.
                </p>
                <img src={i_kickingPart} className="w50"/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <p className='centerText'>

                Testing the kicking mechanism and varying the tension by raising/lowering the metal bar that loads the spring.
                </p>
                <img src={i_kickingMechanism} className="w50"/>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <p className='centerText'>

                Rough render of how the ball gets loaded onto the kicking bot by the invisible driving bot                
                </p>
                <img src={i_render} className="w50"/>
                <br></br>
                <br></br>
                <p>This render was from an earlier version but already had the basic concept. Once the ball is loaded up the first ramp by the driving bot it falls onto the longer ramp and the ball travels until it is stopped by the pacman-looking disc. This disc is designed to hold up the balls in a queue and only let one through the "mouth" every ~3 seconds, which is the time between each kick. After a ball is let through it sits in a divot until it gets kicked up a ramp that is angled to aim towards the bins. </p>
                <br></br>


                </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={"Driving Bot"} leftType=""
            right={<>


                <p className='centerText'>
                CAD for the driving bot
                </p>
                <div className="imgRow4">
                    <img src={i_cad0}/>
                    <img src={i_cad1}/>
                    <img src={i_cad2}/>
                    <img src={i_cad3}/>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <p className=''>
                The main feature of the driving bot (besides driving) was its cage/gate mechanism used for collecting balls. It needed to let balls flow in, but not go back out the other direction. 
                <br></br>
                <br></br>
                <strong>Collecting /</strong> To collect balls it used a swinging gate that only swings in but not out. The gate is at about 80% of the ball's height and the cage pivots at the edge attached to the bot so when a ball comes in, the cage is light enough that it will rise to let the ball in and fall back down to its original height once the ball is fully inside.
                <br></br>
                <br></br>
                <strong>Releasing /</strong> The cage's ability to swing up and down also helps it release balls into the kicking bot. The kicking bot has a ramp for balls to be loaded into and alongside that ramp is a much steeper ramp that will push the cage up so that the ball can go through.  
                </p>
                <div className="imgRow4">
                    <img src={i_gate4}/>
                    <img src={i_gate1}/>
                    <img src={i_gate2}/>
                    <img src={i_gate3}/>
                </div>

                <p className='centerText'>
                Different prototypes for the gate mechanism used for collecting balls
                </p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Doritos"} leftType=""
            right={<>
                <p className='centerText'>
                Hacking the Pappalardo vending machine after it scammed me three times...
                </p>
                <img src={i_doritos} className="imgFitHeight"/>
                
            </>} 
        ></ProjectSection>


    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Futbot;
