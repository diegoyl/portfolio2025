import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS

import i_1 from "./1.jpg"
import i_2 from "./2.jpg"
import i_3 from "./3.jpg"
import i_ghopper from "./ghopper.jpg"

function Cont_Drift() {
  const projKey = "drift"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Serial Drift"
            subtitle="Intentional error in machine-aided drawings"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Parametric Design"
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Rhino3D",
                        "Grasshopper 3D",
                        "Pen Plotter"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"Process"} leftType=""
            right={<>
                <p>
                    I made some simple 2D line art in Rhino and used Grasshopper to quickly turn the line art into complex patterns. I then had these patterns drawn by a pen plotter, where I explored distorting the translation between the digital drawing and physical drawing by using dried out felt pens and charcoal.
                    
                </p>
                <br></br>
                <p className='centerText'>I lost the original Rhino files, but this is what Rhino+Grasshopper looks like</p>
                <img src={i_ghopper} className="w70"/>
                
            </>} 
        ></ProjectSection>

        <Divider />
        
        <ProjectSection
            left={"Results"} leftType=""
            right={<>
                <img src={i_1} className="darken" />
                <img src={i_2} className="darken" />
                <img src={i_3} className="darken" />

                
            </>} 
        ></ProjectSection>




    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Drift;
