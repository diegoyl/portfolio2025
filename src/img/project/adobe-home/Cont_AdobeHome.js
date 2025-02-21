import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists

///// PROJECT IMG/VID IMPORTS
import i_iso from './iso.jpg';
import i_plan from './plan.jpg';
import i_renderOld from './render-old.jpg';
import i_render from './render.jpg';
import i_section from './section.jpg';
import i_thumb from './thumb.jpg';
import i_elevation from './elevation.jpg';
import v_mainVideo from './final.mp4';


function Cont_AdobeHome() {
  const projKey = "adobe-home"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Adobe Home"
            subtitle="Concept"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "CAD",
                        "Technical Drawing",
                        "Rendering",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "AutoCAD",
                        "3ds Max",
                        "Adobe Suite"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        <ProjectSection
            left={"Concept"} leftType=""
            right={<>
                <p>
                Adobe Home is inspired by adobe architecture and Spanish mission architecture. A central courtyard brings in light and allows you to be outside without leaving the house. Since the majority of light comes in through the courtyard, the windows on the outer edges are placed higher which gives a sense of protection and privacy. The simple design, warm colors, and use of wood, adobe, and tile help create a comfortable and natural environment.
                    <br></br>
                    <br></br>

                I created the house in AutoCAD and used 3ds Max to create renders and a make a video.
                </p>

                <video  src={v_mainVideo} width="90%" controls  ></video>
            </>} 
        ></ProjectSection>

        <Divider />

        <ProjectSection
            left={"Drawings"} leftType=""
            right={<>


                <img src={i_iso} className="darken"/>
                <p className='caption'>
                    Isometric
                </p>
                <br></br>                
                <br></br>

                <img src={i_elevation} className="darken"/>
                <p className='caption'>
                Front Elevation
                </p>
                <br></br>                
                <br></br>

                <img src={i_section} className="darken"/>
                <p className='caption'>
                Section
                </p>
                <br></br>                
                <br></br>

                <img src={i_plan} className="darken"/>
                <p className='caption'>
                Plan
                </p>
                <br></br>                
                <br></br>
                <br></br>
                <br></br>

                <img src={i_render} className="darken"/>
                <p className='caption'>
                Living Room
                </p>
            </>} 
        ></ProjectSection>




    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_AdobeHome;
