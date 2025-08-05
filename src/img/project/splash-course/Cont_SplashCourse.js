import { useEffect } from 'react';
import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
// import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS


function Cont_SplashCourse() {
  const projKey = "splash-course"

  useEffect(() => {
    window.location.href = "https://github.com/diegoyl/splash-course/blob/main/README.md"
  },[])
  

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Splash Course"
            subtitle="click the link below...."
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Web Design",
                        "UI/UX",
                        "Backend Integration"
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
                href="https://github.com/diegoyl/splash-course/blob/main/README.md" target="_blank">
                    https://github.com/diegoyl/splash-course/blob/main/README.md                    
                </a>
            </h2>
            </>} 
        ></ProjectSection>

        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_SplashCourse;
