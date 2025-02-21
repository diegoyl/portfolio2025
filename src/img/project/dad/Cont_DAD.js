import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
// import i_XXX from "./XXX.jpg"

function Cont_DAD() {
  const projKey = "dad"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="D.A.D."
            subtitle="Diego Ate the Drummer"

            metaLists={[
                {"title":"INSTRUMENT",
                    "items":[
                        "Guitar",
                ]},
                {"title":"DATE",
                    "items":[
                        "2018 - ?",
                ]},
            ]}

            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}


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

export default Cont_DAD;
