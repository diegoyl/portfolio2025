import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
// import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS


function Cont_Golf() {
  const projKey = "golf"


  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Golf game.."
            subtitle="learning threeJS by making a Wii Sports inspired golf game"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "threeJS",
                        "Game Design",
                        "Blender",
                        "React"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        <ProjectSection
            left={"Link"} leftType=""
            right={<>
            {/* TODO: UPDATE External site */}
            <h2>
                <a style={{}}
                href="https://diegoyl.github.io/golf/" target="_blank">
                    
                </a>
            </h2>
            </>} 
        ></ProjectSection>

        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Golf;
