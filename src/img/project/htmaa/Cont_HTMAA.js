import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
// import i_XXX from "./XXX.jpg"

function Cont_HTMAA() {
  const projKey = "htmaa"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="MAS.863"
            subtitle="How To Make (Almost) Anything"
            
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


        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"SectionTitle"} leftType=""
            right={<>
                <a href="https://fab.cba.mit.edu/classes/863.22/Architecture/people/Diego/" target="_blank">
                    My Site
                </a>
                
            </>} 
        ></ProjectSection>

        <Divider />
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_HTMAA;
