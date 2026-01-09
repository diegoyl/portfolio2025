import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
import i_gui from "./gui.jpg"

function Cont_21m080() {
  const projKey = "21m080"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title={<>Digital Synth Interface</>}
            subtitle="Making music with live-coding"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Figma",
                        "HTML/CSS",
                        "JavaScript",
                        "p5.js",
                        "GitHub",
                ]},

                {"title":"COLLABORATORS",
                    "items":[
                        "Kayli Requenez",
                        "Billal Iqbal"
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
        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>

                I designed a customizable, drag-and-drop GUI system using p5.js and the Web Audio API. Users can create UI elements with live-coding and specify different functional and aesthetic settings for each element. These elements appear in the GUI and can be interacted with and reorganized by dragging around.
                <br></br>
                <br></br>
                This interface was used for the Intro to Music Tech class at MIT where students used the GUI to quickly prototype and build digital synth systems.
                <br></br>
                <br></br>

                I used p5.js to create the UI elements whose appearance (size, color, label, parameters) can be modified with the live-coding component.
                    
                </p>
                
            </>} 
        ></ProjectSection>
        <p className='caption'>Screenshot of Interface</p>
        <br></br>
        <img src={i_gui} id="mtgui" className="imgShadow" />
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Divider />

        <ProjectSection
            left={"UI Elements"} leftType=""
            right={<>
                <p>
                Buttons (Toggle, Momentary)
                <br></br>
                Radio buttons (customizable # of buttons)
                <br></br>
                Sliders (horizontal and vertical)
                <br></br>
                Knobs
                <br></br>
                ADSR Envelope editor
                <br></br>
                Keyboard
                <br></br>
                Grouping Containers

                
                </p>
                
            </>} 
        ></ProjectSection>



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_21m080;
