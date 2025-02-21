import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';


///// PROJECT IMG/VID IMPORTS
import i_build1 from "./build1.jpg"
import i_build2 from "./build2.jpg"
import i_build3 from "./build3.jpg"
import i_build4 from "./build4.jpg"
import i_main from "./main.jpg"
import i_proto1 from "./proto1.jpg"
import i_proto2 from "./proto2.jpg"
import i_proto3 from "./proto3.jpeg"
import i_configs from "./configs.png"
import i_sketch2 from "./sketch2.jpg"
import i_sketch3 from "./sketch3.jpg"
import v_piezoComb from "./piezoComb.mov"
import i_genericboth from "./genericboth.png"
import i_chart from "./chart.png"
import i_foampot from "./foampot.png"
import i_sensordiagram from "./sensordiagram.jpg"

import i_xypad from "./xypad.png"
import i_sketch1 from "./sketch1.jpg"
import i_sketch4 from "./sketch4.jpg"
import i_sketch5 from "./sketch5.jpg"
import i_traktor from "./traktor.jpg"
import v_crush from "./crush.mp4"
import v_eqPalm from "./eqPalm.mp4"
import i_generic1 from "./generic1.png"
import i_generic2 from "./generic2.png"
//  TODO: aadd more protoype vids like eqpalm

import thesisPDF from "./Diego_UgThesis.pdf"

function Cont_Squish() {
  const projKey = "squish"

  function downloadPDF() {

  }
  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Squish"
            subtitle="A squishable & modular music interface"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Interaction Design",
                        "Electronics",
                        "Programming",
                        "Fabrication",
                        "Sound Design",
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Python",   
                        "Arduino",  
                        "Pure Data",    
                        "Force Sensing",    
                        "CAD",  
                        "3D Printing",  

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
        {/* <img src={i_Squish} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"Background"} leftType=""
            right={<>
                <p>
                Despite the growing popularity of digital music instruments (DMIs) and relevant technological advances, accessibility and expressive potential remain significant challenges for musical interface designers. 
                These issues stem three main problems that generic input-output mappings, sensor limitations, and a lack of physical connection between musicians and instruments. Squish explores the benefits of incorporating soft materials into musical interfaces and why DMIs should be designed with musician-instrument relationships as a priority in order to enhance intuitiveness and expressiveness. 

                </p>
                
            </>} 
        ></ProjectSection>

        <Divider />


        <ProjectSection
            left={"Problem"} leftType=""
            right={<>
                <p>
                I identified three main issues with digital music instruments:
                </p>
                <h5>Too Much Mapping Freedom</h5>
                <p>
                Digital mapping and new sensor technologies allow digital instruments to map any input to any output, but this also removes the natural link between physical interaction and sound. For example, piano keys have a physical weight that allows performers to control how much force they use when pressing keys, which influences the volume and timbre of the notes. I found that most digital instruments fail to remake this type of natural feedback and intuitiveness.
                </p>
                <h5>Sensor Limitations</h5>
                <p>
                Sensors allow for cool interactions like detecting hand motion or force-sensitive keys. However, sensors are not perfect and digital instruments have to carefully balance how much sensor data is used
                <ul>

                    <li>Too little: inputs lack nuance, important data is ignored</li>
                    <li>Too much: can become too noisy and render data meaningless</li>
                </ul>
                I found that most sensors are over-simplified and turn complex user inputs into discrete or even binary values.
                </p>


                <h5>Generic Relationships</h5>
                <p>
                
                As digital instruments have gotten more popular and commercialized, their design has been standardized and taken on a shared user interface language. Most interfaces feature buttons, knobs, pads, and sliders. Another selling point is the versatility of digital instruments (mapping freedom). This has led to instruments/controllers with generic designs that prioritize flexibility over usability and may even require reading manuals to be able to use them. 

                The diagram below shows how interactions have become simplified in the digital setting:
                </p>
                <br></br>

                <img src={i_genericboth}  className="" />


            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Design Goal"} leftType="gray"
            right={<>
                <p>
                To guide my design process, I wanted to define what makes a successful instrument. In addition to addressing the problems mentioned above, I wanted to prioritize two elements:
                <ul>
                    <li><strong>Expressiveness / </strong> this measures how well an instrument can translate the musician’s intentions into sound</li>
                    <li><strong>Learning Curve / </strong>  How easy and intuitive is it to play the instrument.</li>
                </ul>
                 

                I wanted to focus on these because I believe making music should be more accessible and I want remove the notion that you need years of training or innate skill to be able to make music. 
                The graph below shows the relationship between how expressive an instrument is and how hard it is to master it. 
                 The violin is an example of an instrument that is extremely expressive, as two musicians can play the same song on it, 
                 but have it sound completely different with changes in playing style. However, many years of practice are required in 
                 order to have full control of this expressive range. In the other corner, the kazoo is an inverse of the violin. 
                 Someone can learn to play the kazoo in minutes, but won’t be able to have much control over its sound.  The bottom 
                 right highlights the area that I wanted to explore with this project. 
                 <strong> An instrument that can be learned in minutes, but still allow for expresiveness.</strong>

                </p>
                <img src={i_chart}  className="darken w70" />

            </>} 
        ></ProjectSection>
        <Divider />


        <ProjectSection
            left={"Design Process"} leftType=""
            right={<>
                <p>
                During the prototyping and research process, I kept coming back to idea of physical metaphors, which I found to be very effective at providing interesting and intuitive interactions. Early on I tried out using materials and textures to symbolize different sonic textures.
	
                <ul>
                    <li>hard, rough, sharp  <span style={{margin:"0 1em"}}> → </span> distorted, staccato, brighter</li>
                    <li>soft , smooth, light <span style={{margin:"0 1em"}}> → </span>  reverb, lower frequencies, slower</li>
                </ul>
                During this phase, I also explored using piezo sensors that turn vibrations into sound. 

                </p>
                <br></br>


                <div className='imgRow3'>
                    <img src={i_sketch2} className="darken w90" />
                    <img src={i_sketch3}  className="darken w90" />
                    <video  src={v_piezoComb} width="100%" controls  ></video>
                        

                    {/* <video  height="20%" controls >
                        <source  src={v_piezoComb} type="video/mp4"/>
                    </video> */}
                </div>
                <p>After testing various materials and sensors I settled on three elements that  would guide the rest of the design: <strong> force sensors, soft materials, </strong> and <strong> modular design</strong>.</p>

            </>} 
        ></ProjectSection>


        <ProjectSection
            left={"Force Sensing"} leftType="gray"
            right={<>
                <p>An element of acoustic instruments that I wanted to mimic was energy transfer. Percussion instruments are great at matching the input and output energy: a softer hit results in a softer sound, while a harder hit results in a louder, more aggressive sound. While this seems like an obvious result, many digital instruments rely on settings and various parameters to control the output and two completely different sounds might be created by the same type of input, such as pressing a button. I chose to use force sensing in my instrument to add a better sense of energy transfer for the player.</p>
                <br></br>
                <p>
                <a target="_blank" href="https://www.youtube.com/watch?v=w2tcoWSsgqY/">The Pipe</a> 

                    , an instrument by Soma Laboratory, was an interesting reference for me that uses energy transfer to add a lot of depth to the instrument. By using a piezo mic, it is able to pick up every nuance of the musician's voice, breath, and contact with the mouth piece. This super responsive input is then transforned through various filters controlled by knobs you can move around while blowing into the mouthpiece.</p>
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Foam"} leftType="gray"
            right={<>
                <p>After exploring different materials, I chose foam because of its properties and because it has not really been explored in digital instrument design as much as I expected. I like how it deforms, but it able to reset to its original form, 
                    which allows for a variety of interactions (hitting, squeezing, twisting, pulling).
                    <br></br>    
                    <br></br>    
                    Foam's properties allow it to mimic several existing instrument interactions, such as compressing/pulling an acordion and squeezing a bagpipe or a talking drum. By drawing on these examples, my instrument will take on some of their implied relationships (such as squeezing = airflow/sound) while being able to combine them to create new interactions. 
                </p>
                
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Modular Design"} leftType="gray"
            right={<>
                <p>Creating a modular design made up of simple blocks allows for adaptability. People with less skill are able to use a single block or two, while more advanced musicians can stack and combine the blocks to create a more complex instrument that matches their skill level.</p>
            </>} 
        ></ProjectSection>
        <Divider />



        <ProjectSection
            left={"Pressure Sensor Design"} leftType=""
            right={<>
                <p>
                    My idea required a sensor to measure the amount of pressure applied to foam blocks. I found that none of the available sensors worked accurately/responsively enough, so I had to make my own.
                    <br></br>
                    <br></br>
                    I began by trying to use capacitive sensing to measure the compression of the blocks by placing a capactive sheet at the bottom and using my hand as the other capacitive surface. This worked, but only worked at small distances and was not very reliable. 
                    Instead, I designed my own pressure sensor by using velostat foam, which is conductive and varies its resistivity when compressed. I can measure the voltage across the foam to get a value, similar to how a potentiometer works.
                </p>


                <img src={i_foampot} className="darken w70"/>
                <p className='caption'>
                    A potentiometer is a resistor that can change value by adjusting the knob. Similarly, the conductive foam I used acts as a resistor and changes value when compressed.
                </p>
                <br></br>
                <br></br>
                <br></br>

                <p>
                The value of the small conductive foam (black) is measured by placing it as the connection between two copper strips, which are wired to an Arduino. I found that the range of resistivity that I needed Prerequired the conductive foam to be pretty small, so I placed it at the bottom of a larger block of memory foam (yellowish).  By combining these two foam pieces I had a block that is easy to interact with and is able to sense pressure. I also added a small square of plastic (cardboard in the prototype) to help make the pressure transfer more consistent between the two foams.

                </p>
                <br></br>

                <p className='caption'>
                    Assembly of the custom sensor prototype
                </p>
                <br></br>
                <div className='imgRow3 w60'>
                    <img src={i_proto1} className=""/>
                    <img src={i_proto2} className=""/>
                    <img src={i_proto3} className=""/>
                </div>

                <br></br>
                <br></br>
                <p className='caption'>
                    Diagram of custom sensor
                </p>
                <img src={i_sensordiagram} className="darken w60"/>

                
            </>} 
        ></ProjectSection>



        <Divider />

        <ProjectSection
            left={"Final Design"} leftType=""
            right={<>
                <h2 style={{fontSize:"2em", letterSpacing:".012em", color:"var(--c-black)",marginBottom:"1em"}}>

                    <span style={{color:"var(--c-blue)"}}> Squish </span>
                
                is a set of foam blocks embedded with custom pressure sensors, which encourage 
                
                    <span style={{color:"var(--c-blue)"}}> tactile interaction </span>
                
                and give the user nuanced control over various musical parameters. The 
                
                    <span style={{color:"var(--c-blue)"}}> modular design </span>
                
                of the foam blocks allows for versatile configurations, enabling users to control multiple parameters simultaneously with 
                
                    <span style={{color:"var(--c-blue)"}}> simple, but responsive </span>
                
                gestures.

                </h2>
                
                <img src={i_main} />

                <div className='imgRow4'>
                    <img src={i_build1} />
                    <img src={i_build2} />
                    <img src={i_build3} />
                    <img src={i_build4} />
                </div>
                <p className='caption'>Assembly of the pressure sensor within a block</p>


            </>} 
        ></ProjectSection>

        <ProjectSection
            left={""} leftType=""
            right={<>
                <p >
                I designed the instrument with four configurations in mind, but during testing I found that it became more freeform. People tried stacking them in different orientations and also used other body parts, such as putting a block in their armpit, to be able to control more blocks at once. I thought this was a good indication that the instrument succeeded at being adaptable and customizable to each person’s musical style.
                </p>

                <p className='caption'>Potential configurations</p>

                <img src={i_configs} />
                
                <br></br>
                <br></br>
                <br></br>
                <p className='centerText w80'>This graphic shows an XY pad configuration that allows 4 parameters to be controlled with a single hand. Some parameters, like frequency gates, have default values of 100% and pressing their cubes reduces the amount of that frequency that is heard. Others parameters, like reverb, begin at 0% and increase the effect when pressed.  </p>
                
                <img src={i_xypad} className="w70" />

            </>} 
        ></ProjectSection>


        <ProjectSection
            left={"Analysis"} leftType="gray"
            right={<>
                <p>
                    
                    Overall, I was pleased with the results that <i> Squish </i> produced,  but there were some things I wasn’t able to address due to the short time frame of the project.
                    <ul>
                        <li>The blocks were very effective as input controllers and had low latency</li>
                        <li>Sensing was responsive, but a little too sensitive at the beginning of compression. This could be fixed with a mapping curve.</li>
                        <li>I didn’t end up exploring block shape variations and different interactions like bending and twisting</li>
                        <li>When reconfiguring, mappings must be updated on the computer. An additional controller could be added to make this easier, or maybe use another sensing method to automatically detect different configurations and update the mappings.</li>
                        
                    </ul>

                </p>

            </>} 
        ></ProjectSection>


        <Divider />
        
        <ProjectSection
            left={"Thesis"} leftType=""
            right={<>
                <p>This project was part of my undergrad thesis, in which I researched the potential of soft materials in musical interfaces and developed <i>Squish</i> as a proof of concept.
                <br></br>
                <br></br>
                </p>
                <p className=''>
                Here is the full thesis if you want to read it! 
                <br></br>
                <a href={thesisPDF} download="Diego's Thesis" target='_blank'> 
                    <button id="thesisBtn" >Thesis PDF</button>
                </a>

                </p>

            </>} 
        ></ProjectSection>



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Squish;
