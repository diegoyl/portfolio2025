import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';
import thumbSrc from './thumb.jpg';

///// PROJECT IMG/VID IMPORTS
import i from './thumb.jpg';
// import video from './Videos.video1.mp4'

import i_top from "./topblue.jpg"
import i_side from "./sideblue.jpg"

import i_computer from  "./computer.jpg"
import i_zoomin from  "./clock_zoomin.jpg"
import i_inside from  "./inside.jpg"
import i_refs from  "./refs.png"


import i_ogsketch from "./ogsketch.jpeg"
import i_diagramWiring from "./diagram1.png"
import i_diagramDataFlow from "./diagram2.png"
import i_process3dp from "./process-3dp.jpg"
import i_processClamp from "./process-clamp.jpg"
import i_processDone from "./process-done.jpg"
import i_processProgramming from "./process-programming.jpg"
import i_processSlicer from "./process-slicer.jpg"
import i_gband from "./gband.jpg"
import i_sketch1 from "./sketch1.jpg"
import i_sketch2 from "./sketch2.jpg"
import i_sketch3 from "./sketch3.jpg"
import i_sketch4 from "./sketch4.jpg"
import i_rotary from "./rotary.jpg"
import i_tofsensor from "./tofsensor.png"
import i_connected from "./connectedblue.jpg"
import i_motor from "./motor.png"
import i_rhinoAssembly from "./rhinoAssembly.png"
import i_motorexploded from "./motorexploded.png"
import i_unexploded from "./unexplode.png"
import i_finalrender from "./finalrender.png"



function Cont_Clock() {
  const projKey = "clock"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Sequencer Clock"
            subtitle="An instrument that lets you play with time"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Interaction Design",
                        "Electronics",
                        "Programming",
                        "Fabrication",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Arduino",
                        "CAD",
                        "3D Printing",
                        "Laser Cutting",
                        "Distance Sensors",
                        "Motors",
                        "MIDI + Garageband",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        {/* PROJECT CONTENT */}

        {/* <ProjectSection
            left={"SectionTitle"} leftType=""
            right={<>
                
            </>} 
        ></ProjectSection> */}

        {/* <Divider /> */}


        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                
                <p>
                <i>Sequencer Clock</i> is an instrument inspired by how we experience time when listening to or playing music.
                Typical beat sequencers or drum machines use linear, rhythmic grids to make sure that every note is exactly on beat. By using a circular, gridless interface that 
                resembles a clock face, <i>Sequencer Clock</i> creates a music-making experience that is more organic and leads to unique and funky rhythms. The movable pieces that control the music being generated encourage people
                to constantly play around and explore the infinite possibilities that can be generated each time it loops. <i>Sequencer Clock</i> includes three modes: clock, drum, and keyboard, which are shown in the demo video below.
                </p>

                <div className='imgRow3'>
                    <img loading="lazy" src={i_top} />
                    <img loading="lazy" src={i_connected} />
                    <img loading="lazy" src={i_side} />
                </div>
                <iframe src="https://www.youtube.com/embed/4sAC5m0iWuU" frameborder="0" 
                allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
                style={{"aspect-ratio": "16/10", "width":"100%","margin":"1em 0"}}/>


            </>}
        ></ProjectSection>

        <Divider />

        <ProjectSection
            left={"Playing With Time"} leftType=""
            right={<>
                
                <p>
                The challenge was design an interactive object that plays with time. I wanted to make an instrument, so it made sense to focus on musical time: rhythm.
                <br></br>
                <br></br>
                My main references during the initial design stage were percussion instruments, since they are essential in creating rhythm. As a musician, 
                I have always preffered playing analog instruments, but I also appreciate the aesthetics and accessibility of digital music controllers. For this project I wanted to create something that looks like a digital instrument, but allows you play things that an analog instrument would play.

                </p>
                <br></br>
                <br></br>
                <p className='centerText'>
                How can I go from this to this?
                </p>
                <img loading="lazy" src={i_refs} style={{mixBlendMode:"darken", width:"60%", margin:" -1.5em auto 0",display:"block"}} />
                

            </>}
            divider={true}
        ></ProjectSection>


        <ProjectSection
            left={"Design Process"} leftType=""
            right={<>
                
                <p>
                I started by basing my interface on a simple beat sequencer. For example, Garageband's iPhone app uses a grid where each row corresponds to an instrument and 
                each column is a beat. Highlighted squares will play a sound at that beat and you can also adjust the volume of each with the horizontal slider inside each square.
                </p>
                <img loading="lazy" src={i_gband} className="w70"/>
                <br></br>
                <br></br>
                
                <p>
                My first concepts attempted to make a 3D version of the Garageband interface, using blocks that can be moved around instead of buttons that are pressed on the screen. By using distance sensors, the location of the blocks can be digitally recorded and fed into an audio processor.
                <br></br>
                <br></br>
                Accomplishing this would be straightforward if I kept the linear layout. Each beat would have its own distance sensor and the software can just iterate through reading each sensor.
                
                Converting this to a circular layout had some issues though. Distance sensors typically have a narrow field of vision, so I would need a lot of sensors to cover the whole circle, but the sensors have to be placed in the middle so adding too many would take up a lot of space.
                </p>

                <div className='imgRow2 darken' style={{gap:"10%"}}>
                    <img loading="lazy" src={i_sketch1} />
                    <img loading="lazy" src={i_sketch2} />
                    {/* <img loading="lazy" src={i_sketch3} /> */}
                </div>

                <p>The solution was to use a single distance sensor and have it continuously rotate so that it can "see" the whole circle. This provided multiple solutions at once:
                    <ol>
                        <li>Removes the constraint of a discrete grid, blocks can now be placed anywhere </li>
                        <li>Removes the need to iterate through various sensors and introduces a natural way of keeping a constant tempo (rotation speed)</li>
                        <li>Mimics a record player, making its function more intuitive. A record rotates and its grooves are "read" by a stationary needle. Sequencer Clock reverses this by having a rotating sensor "read" the stationary blocks.</li>
                    </ol>
                    <br></br>
                    Just like a record player's grooves encode information with their shape/height, the block's location can be translated into different musical parameters. 
                </p>
                {/* <img loading="lazy" src={i_sketch4}  className="w60 darken"/> */}
            
                <div className='imgRow2 darken' style={{gap:"10%"}}>
                    <img loading="lazy" src={i_sketch4} />
                    <img loading="lazy" src={i_ogsketch} className="w80" />
                    {/* <img loading="lazy" src={i_sketch3} /> */}
                </div>
                <p>
                I used blocks for most of the prototyping process, but made two changes to them towards the end. I added magnets to them so they wouldn't slide around on the instrument surface. I also switched to using a cylinder shape since the blocks were too wide and the thinner cylinders allowed for more precise movement and sensing.
                </p>
            </>}
        ></ProjectSection>

        <Divider />



        <ProjectSection
            left={"How it Works"} leftType=""
            right={<>
                
                <p>
                A distance sensor is attached to a motor in the center and spins around so that it is able to detect the prescence of magnets placed on the clock face. 
                My initial protoypes used an ultrasonic sensor that comes with Arduino kits, but the field of vision was too wide and the sensor was too bulky, so 
                I ended up using a VL53L0X Time-of-Flight sensor. The ToF sensor is much smaller, and provides a more precise reading due to its narrow field of vision. To prevent the sensor's wire connections from getting twisted, I used a rotary connector to connect it to the Teensy microcontroller.
                </p>
                <div className='imgRow3 darken' >
                    <img loading="lazy" src={i_motor} style={{width:"50%"}}/>
                    <img loading="lazy" src={i_tofsensor} style={{width:"50%",marginTop:"3em"}}/>
                    <img loading="lazy" src={i_rotary} style={{width:"50%"}}/>
                </div>
                <p>
                
                Everytime the sensor detects a magnet it sends the distance value to the the Teensy board, which is bascially an Arduino that is customized for musical applications. The distance value is then converted 
                to a <a target="_blank" href="https://en.wikipedia.org/wiki/MIDI"> 
                    {/* <p><span>›</span> INSTA</p> */}
                     <span>MIDI</span>
                </a> parameter that controls either volume, pitch, or instrument sound, depending on which mode the Clock is in. By connecting the Clock to any DAW that accepts MIDI, it will power the motor and begin playing!
                <br></br>
                <br></br>
                A button switches between modes and a knob controls the speed of the motor that is spinning the distance sensor, so it acts as a tempo knob.
                </p>
                
                <div className='imgRow2'>
                    <img loading="lazy" src={i_diagramWiring}  className="w90"/>
                    <img loading="lazy" src={i_diagramDataFlow}  className="w90"/>
                </div>

            </>}
            divider={false}
        ></ProjectSection>


        <ProjectSection
            left={"Technical Challenges"} leftType="gray"
            right={<>

                <p className='inline w60'>
                    While the ToF sensor performed much better than the ultrasonic sensor, it was still very finicky and I had to design the 
                    instrument enclosure to fit the sensor's limitations, mainly keeping the dimensions within the sensor's optimal range for sensing. 
                    <br></br>
                    <br></br>
                    The main challenge while programming the Teensy board was making sure that the rate at which the sensor was sending information was constant and fast enough so that there wouldn't be any detectable latency. I had to reformat some of the motor driver code because it was doing synchronous stuff that was interrupting the sensor's activity.
                </p>
                <img loading="lazy" src={i_processProgramming} className="w30 inline" />
            </>} 
        ></ProjectSection>

        <Divider />

        <ProjectSection
            left={"Fabrication"} leftType=""
            right={<>

                <p>
                    I made a an enclosure with openings for the magnetic surface, button, potentiometer, and USB connection.  I modeled it in Rhino and 3D-printed it. The printers I used were only able to fit half of the enclosure so I printed it in two parts. I used a metal laser cutter to cut out the top surface and cleaned it up with a sand blaster. Gluing some smaller magnets to the inside of the case allow the surface to be taken on and off when needed.
                </p>
                <div className='imgRow4'>
                    <img loading="lazy" src={i_processSlicer} />
                    <img loading="lazy" src={i_process3dp} />
                    <img loading="lazy" src={i_processClamp} />
                    <img loading="lazy" src={i_processDone} />
                </div>
                <p className='caption'>Fabrication Process</p>

                <div className='imgRow2'>
                    <img loading="lazy" src={i_unexploded} className="w70" />
                    <img loading="lazy" src={i_motorexploded} className="w70" />
                </div>
                <p className='centerText'>Motor and sensor assembly: I printed a small frame that attaches the sensor to the slip ring connector. The motor fits into some walls on the bottom surface of the enclosure so that it doesn't move around.</p>
                <br></br>

                <div className='imgRow2'>
                    <img loading="lazy" src={i_rhinoAssembly} />
                    <img loading="lazy" src={i_finalrender} />
                </div>
                <p className='caption'>Using Rhino to check that all the parts would fit in the enclosure. And final render.</p>
            </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={"Final Product"} leftType=""
            right={<>
            
            </>} 
        ></ProjectSection>

        
        <div class="imgRow2">
            <img loading="lazy" src={i_top} />
            <img loading="lazy" src={i_side} />
        </div>

        <img loading="lazy" src={i_zoomin} style={{mixBlendMode:"darken"}}/>

        <img loading="lazy" src={i_computer} />


    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Clock;
