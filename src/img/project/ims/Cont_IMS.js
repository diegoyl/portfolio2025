import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_big1 from './big1.jpg';
import i_big2 from './big2.jpg';
// import i_XXX from "./XXX.jpg"

function Cont_IMS() {
  const projKey = "ims"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="IMS"
            subtitle=""
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        
                ]},
                {"title":"TOOLS",
                    "items":[

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
        <img src={i_big1} />
        <img src={i_big2} />


        <ProjectSection
            left={"SectionTitle"} leftType=""
            right={<>
                <p>

                    
                </p>
                
            </>} 
        ></ProjectSection>

        <Divider />
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_IMS;
