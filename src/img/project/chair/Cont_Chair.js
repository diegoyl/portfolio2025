import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_assembly from "./assembly-gif.gif"
import i_drawings from "./drawings.jpg"
import i_iso from "./iso.jpg"
import i_prototypes from "./prototypes.png"
import i_render from "./render.jpg"
import i_row from "./row.jpg"
import i_single from "./single.jpg"
import i_diegomodel from "./diegomodel.png"

function Cont_Chair() {
  const projKey = "chair"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Pair Chair"
            subtitle="A re-assembleable chair made of two identical parts"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Woodworking",
                        "Rapid Prototyping",
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Rhino3D",
                        "Wood Shop",

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
                I wanted to make a chair that can be played with and re-assembled in different ways. There are two identical pieces that can be interlocked to form a chair/stool/surface of varying heights and dimensions. 
                </p>

                <img src={i_assembly} className="im"/>

                <div className="imgRow2">
                    <img src={i_single}  className=""/>
                    <img src={i_iso}  className=""/>
                </div>



            </>} 
        ></ProjectSection>

        <Divider />
        

        <ProjectSection
            left={"Design Process"} leftType=""
            right={<>
                <p>
                    <h5>Design Constraints</h5>
                    - Chair must be made of 2x4s and 4x4s
                    <br></br>
                    - Must use adhesive joining methods (no screws/nails)
                    
                    
                </p>

                <br></br>
                <br></br>

                <p>
                    I wanted make a chair that requires interactions besides sitting and I thought that assembling was a fun one to play with because it would give you the ability to assemble it in a way that fits your needs. 
                <br></br>
                <br></br>

                    I began by making small scale prototypes out of balsa wood. Because I wanted to keep the design relatively simple to encourage people to play with it, I realized that the two parts would have to support themselves in various positions, which required designing multiple points of contact and making sure all of these were stable. I settled on using staircase edges that served as slots that could accept each other at various heights.
                </p>
                <br></br>

                <img src={i_prototypes}  className="w80"/>
                <br></br>
                

                <p>
                    After picking a prototype to continue developing, I still had to figure out what where the ideal dimensions and number of "stairsteps". During this process I found that having an assymetrical design helped add different configurations, since the symmetrical design had multiple dimensions that were the same length. Here were the final drawings before I fabricated the chair:
                </p>
                <img src={i_drawings}  className="multiply"/>
                <br></br>
                <br></br>

                <p>
                    I also used a 3D scanning app to create a 3D model of me sitting, which I used in Rhino to get a better sense of how the chair would fit with a body.
                </p>
                <img src={i_diegomodel}  className="w70"/>
                <br></br>
                <br></br>

                <p>
                    Fabrication involved cutting the pieces to the right lengths, creating lap joints, gluing it all together, and sanding it down. The GIF below shows a quick process of putting together one of the configurations.
                </p>
                <img src={i_assembly} className="w50"/>
                
                <br></br>
                <br></br>
                <br></br>

                <p className='caption'>
                        Three possible configurations
                </p>
                <img src={i_row}  className=""/>
                <br></br>
                <br></br>
                <br></br>


                <p className='caption'>A quick render from Rhino </p>
                <img src={i_render}  className=""/>

                <br></br>
                <br></br>

                <p>The chair is still holding up after several years of use! I mainly use it as a night stand.</p>

            </>} 
        ></ProjectSection>


    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Chair;
