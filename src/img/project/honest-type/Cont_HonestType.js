import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
// import i_XXX from "./XXX.jpg"

function Cont_HonestType() {
  const projKey = "honest-type"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Honest Type"
            subtitle="Exploring our trust in the words of the digital world"
            
            metaLists={[
                {"title":"",
                    "Spring 2022":[
                        
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>

        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}

        <ProjectSection
            left={"Overview"} leftType=""
            right={<>

            </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={"Material Studies"} leftType=""
            right={<>

            </>} 
        ></ProjectSection>
        <Divider />
        
        <ProjectSection
            left={"Type Variations"} leftType=""
            right={<>

            </>} 
        ></ProjectSection>




    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_HonestType;
