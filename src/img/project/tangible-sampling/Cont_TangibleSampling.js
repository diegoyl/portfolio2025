import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_wide from "./wide.jpg"
import i_install from "./install.jpg"
import i_maxmsp from "./maxmsp.png"
import i_top1 from "./top1.png"
import i_top2 from "./top2.png"
import i_top3 from "./top3.png"
import i_proto1 from "./proto1.jpg"
import i_proto2 from "./proto2.jpg"
// import i_XXX from "./XXX.jpg"

function Cont_TangibleSampling() {
  const projKey = "tangible-sampling"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Tangible Sampling"
            subtitle="Using tactile interaction to encourage collaborative music-making"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Electronics",
                        "Programming",
                        "Installation Design",
                        "Fabrication",
                        "Sound Design ",
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Arduino",
                        "Distance Sensing",
                        "MAX/MSP",
                        "CAD + 3D Printing",
                        "Laser cutting",
                        "Adobe Suite",
                ]},
                {"title":"DISPLAYED",
                    "items":[
                        "MIT List Visual Arts Center",
                        "x2 (2023, 2024)",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        {/* PROJECT CONTENT */}

        {/* <ProjectSection
            left={"SectionTitle"} leftType=""
            right={<>
                <p></p>
            </>} 
        ></ProjectSection> */}

        {/* <Divider /> */}


        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                <i>Tangible Sampling</i> is an interactive installation that encourages collaborative music-making through playful and tactile interaction inspired by hip-hop sampling. 
                <br></br>
                <br></br>
                The installation's music is made up of a drum track and a melodic track, with each track being controlled by their own set of four blocks. Each block represents 1/4th of an audio sample and the position of the four blocks determine the order in which the sections of the sample are played. Moving the blocks around mimics the chopping and looping techniques used by hip-hop producers. Users can also press buttons to change the drum or melody sample and can also use a knob to change the speed of the samples or even play them in reverse.
                    
                </p>
                <img src={i_install} />
                
            </>} 
        ></ProjectSection>

        <Divider />
        
        <ProjectSection
            left={"How It Works"} leftType=""
            right={<>
                <p>
                    The installation is controlled by a MAX/MSP program that I wrote, which takes in sensor data from an Arduino and plays the corresponding samples.
                    <br></br> 
                    <br></br> 
                
                </p>
            </>} 
        ></ProjectSection>
            
        <ProjectSection
            left={"Arduino"} leftType="gray"
            right={<>
                <p>        
                    
                    The Arduino is connected to three components:
                    <ul>
                        <li>
                            <strong>Distance Sensors: </strong>
                            Each of the blocks has a corresponding sensor that measures how far away it is from the center. Because I was running out of Arduino pins I had to share the trigger pin and rapidly iterate through measuring all the sensors separately
                        </li>
                        <br></br>
                        <li>
                            <strong>Buttons: </strong>
                            There is a button for each track and you can press them to cycle through the bank of samples
                        </li>
                        <br></br>
                        <li>
                            <strong>Tempo Knob: </strong>
                            This sets the tempo by changing the speed of the samples. I time-stretched all samples to be the same BPM so that it is easier to stretch them all when the tempo changes and keep them in sync. The knob's mapping is not linear. The left half covers -200% to -50% speed and the right half 50% to 200%. A negative speed plays the sample in reverse.  
                        </li>
                    </ul>
                    <br></br>
                    The Arduino constantly sends the current values of all the components to MAX/MSP through Serial in a single line of values separate by spaces.
                    
                </p>
                <br></br>
                
            </>} 
        ></ProjectSection>
                
            
        <ProjectSection
            left={"MAX/MSP"} leftType="gray"
            right={<>
                <p>    
                    MAX is a visual programming language for music and sound processing. The program runs a metronome based on the tempo value from the Arduino. On every beat it will check the most recent data sent from the Arduino and update the corresponding components in the MAX program. After updating these it will check what the current beat is and play the sample for the corresponding blocks.
                    <br></br>    
                    <br></br>    
                    For example, if it is beat 1 (out of 4), it will check the distance values of the 1st block and 5th block (which is the second track's first block). It then converts the distance values into an integer between 1-4 and then plays the corresponding sample. 
                    
                    <br></br>    
                    <br></br>    
                    
                </p>
                <p className='centerText'>
                    Left: This is the default configuration which will play the quartered samples in order, recreating the original sample.
                <br></br>
                <br></br>
                    Right: In this configuration the samples have been chopped up. On this 1st beat the 2nd quarter of the melodic sample will play and the third quarter of the drum sample will play.
                </p>
                <div className='imgRow2'>
                    <img src={i_top1} />
                    {/* <img src={i_top2} /> */}
                    <img src={i_top3} />
                </div>
                
            </>} 
        ></ProjectSection>    



        <Divider />
        
        <ProjectSection
            left={"Prototypes"} leftType=""
            right={<>
                <p>
                    Early prototypes where I used random objects or my hand to test the sensors and marked off the cutoff points on a paper. Scaling up actually introduced some  problems as the sensors began to interfere with each other and be less consistent at longer distances.
                </p>
                <div className='imgRow2'>
                    <img src={i_proto1} />
                    <img src={i_proto2} />
                </div>
            </>} 
        ></ProjectSection>
        <img src={i_wide} />



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_TangibleSampling;
