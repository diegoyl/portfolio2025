import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';


///// PROJECT IMG/VID IMPORTS
import wordmarkLogo from "./logo.png"

import i_assembly1 from "./assembly1.jpg"
import i_assembly2 from "./assembly2.JPG"
import i_assembly3 from "./assembly3.jpg"
import i_assembly4 from "./assembly4.JPG"
import i_clampDiagram1 from "./clamp-diagram.png"
import i_clampDiagram2 from "./clamp2-diagram.png"
import i_groupAssembling from "./group-assembling.JPG"
import i_lasercut from "./lasercut.png"
import i_layoutLabeled from "./kit_layout.jpg"
import i_layout1 from "./layout1.png"
import i_layout2 from "./layout2.jpg"
import i_side from "./side.JPG"
import i_strapSingle from "./strap-single.png"

function Cont_Forting() {
  const projKey = "forting"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title={<img src={wordmarkLogo} style={{height:"1.2em"}}/>}
            subtitle="A kit for pillow forting outdoors"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "UX Design",
                        "Metal Fabrication",
                        "Sewing",
                        "Rendering",
                        "Rapid Prototyping",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "CAD",
                        "3D Printing",
                        "Laser Cutting",
                        "Adobe Suite",
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
        {/* <img src={i_Forting} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                <i>Forting</i> is a kit of parts inspired by the idea of outdoor pillow forts. The kit includes metal struts, 3D printed adjustable joints, waterproof tarps, stakes, and hookable elastic bands. Users can choose how to combine the parts and the kit is designed for easy assembly/disassembly to promote customization and play.

                </p>
                <img src={i_groupAssembling} />
                <img src={i_side} />
                <br></br><br></br>
                <br></br><br></br>




            </>} 
        ></ProjectSection>

            <img src={i_layoutLabeled} />

        <ProjectSection
            left={""} leftType=""
            right={<>

                <div className='imgRow2'>
                    <img src={i_clampDiagram1} />
                    <img src={i_clampDiagram2} />
                </div>
                <p className='caption'>
                    Left: Clamp assembly
                    <br></br>
                    Right: Built-in screw mechanism used for the connectors on the ends of metal struts
                </p>
                
                <br></br><br></br>
                <br></br><br></br>

                <img src={i_lasercut} />
                <p className='caption'>
                    Vector drawings for laser-cutting the metal pieces for the hook and stake (which was then bent 90 deg. on a brake)
                </p>
                <br></br><br></br>
                <br></br><br></br>
                <div className='imgRow3'>
                    <img src={i_assembly1} />
                    <img src={i_assembly2} />
                    <img src={i_assembly3} />
                    {/* <img src={i_assembly4} /> */}
                </div>
                <br></br><br></br>
                <br></br><br></br>


                <img src={i_strapSingle} />
                <br></br><br></br>
                <br></br><br></br>
                <img src={wordmarkLogo} />

            </>} 
        ></ProjectSection>

        {/* <Divider /> */}
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Forting;
