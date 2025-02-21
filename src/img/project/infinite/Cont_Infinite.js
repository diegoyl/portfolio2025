import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
// import i_XXX from "./XXX.jpg"

function Cont_Infinite() {
  const projKey = "infinite"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Infinite Magazine"
            subtitle="I was the Visual Design Director for MIT's fashion magazine"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Layout Design",
                        "Photo Editing",
                        "Photography",
                        "Animation"
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Photoshop",
                        "Photoshop again",
                        "InDesign",
                        "Illustrator",
                        "After Effects",
                        "Photoshop x3",

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
            left={"...ummm"} leftType=""
            right={<>
                <p>
                Coming soon, i promise!
                    
                </p>
                
            </>} 
        ></ProjectSection>

        <Divider />
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Infinite;
