import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
// import i_XXX from "./XXX.jpg"
import i_issXrelease_cyber from "./issXrelease-cyber.jpg"
import i_issXreleaseGIF from "./issXrelease.gif"
import i_issue11cover from "./issue11cover.jpg"
import i_issue8cover from "./issue8cover.jpg"
import i_issue9cover from "./issue9cover.jpg"
import i_issueXcover_render from "./issueXcover-render.jpg"
import i_issueXcover from "./issueXcover.jpg"
import i_issueXcoverPNG from "./issueXcover.png"
import i_issueXrelease_anti from "./issueXrelease-anti.jpg"
import i_issueXrelease_cyber from "./issueXrelease-cyber.jpg"
import i_issueXrelease_ines from "./issueXrelease-ines.jpg"
import i_issueXrelease_lowlights from "./issueXrelease-lowlights.jpg"
import i_issueXrelease_overgrown from "./issueXrelease-overgrown.jpg"
import i_issueXrelease_sonic from "./issueXrelease-sonic.jpg"
import i_issueXrelease_tova from "./issueXrelease-tova.jpg"
import i_poster_loop9 from "./poster-loop9.gif"
import i_poster2_2 from "./poster2.2.png"
import i_poster8_1 from "./poster8-1.jpg"
import i_poster8_2 from "./poster8-2.jpg"
import i_poster9H_1 from "./poster9H-1.jpg"
import i_poster9H_2 from "./poster9H-2.jpg"
import i_poster9H_3 from "./poster9H-3.jpg"
import i_poster9V_1 from "./poster9V-1.jpg"
import i_poster9V_2 from "./poster9V-2.jpg"
import i_poster9V_3 from "./poster9V-3.jpg"
import i_spread1 from "./spread1.jpg"
import i_spread2 from "./spread2.jpg"
import i_spread3 from "./spread3.jpg"
import i_thumb from "./thumb.jpg"


function Cont_Infinite() {
  const projKey = "infinite"

  function redirectDelay(path) {
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }

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
                        "More Photoshop",

                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>



        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                
                    I was <a href="https://infinitemagazine.mit.edu/" target="_blank">Infinite Magazine's</a> Visual Design Director for Issues 8, 9, X, and 11. I oversaw layout design and also helped editing photos, creating promotional material, and graphic design content for the magazine.
                    <br></br>
                    <br></br>
                    Other work I did with Infinite:
                    <button id="relpage-merch" className="inf-relpage" onClick={() => {redirectDelay("/infinite-merch")}} 
                        >
                        INFINITE MERCH
                    </button>

                    <button id="relpage-gala" className="inf-relpage" onClick={() => {redirectDelay("/mitgala")}} 
                        >
                        MIT GALA
                    </button>

                    
                </p>
                
            </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={"Covers"} leftType=""
            right={<>
                <div className="imgRow2">
                    <img src={i_issue11cover} className="imgShadow inf-gridgap"/>
                    <img src={i_issueXcover} className="imgShadow inf-gridgap"/>
                </div>
                <div className="imgRow2">
                    <img src={i_issue9cover} className="imgShadow inf-gridgap"/>
                    <img src={i_issue8cover} className="imgShadow inf-gridgap"/>
                </div>
            </>} 
        ></ProjectSection>
        <Divider />
        
        <ProjectSection
            left={"Posters"} leftType=""
            right={<>
            </>} 
        ></ProjectSection>
        <ProjectSection
            left={"Issue X"} leftType="gray"
            right={<>
                <div className="imgRow2">
                    <img src={i_issueXrelease_tova} className="imgShadow inf-gridgap"/>
                    <img src={i_issueXrelease_cyber} className="imgShadow inf-gridgap"/>
                </div>
                <div className="imgRow2">
                    <img src={i_issueXrelease_anti} className="imgShadow inf-gridgap"/>
                    <img src={i_issueXrelease_overgrown} className="imgShadow inf-gridgap"/>
                </div>
                <div className="imgRow2">
                    <img src={i_issueXrelease_sonic} className="imgShadow inf-gridgap"/>
                    <img src={i_issueXrelease_ines} className="imgShadow inf-gridgap"/>
                </div>

                <img src={i_issXreleaseGIF} style={{margin:"8em auto"}}className="imgShadow imgFitHeight"/>

            </>} 
        ></ProjectSection>
        
        <ProjectSection
            left={"Issue 9"} leftType="gray"
            right={<>
                <div className="imgRow2">
                    <img src={i_poster9V_1} className="imgShadow inf-gridgap"/>
                    <img src={i_poster9V_2} className="imgShadow inf-gridgap"/>
                </div>
                <div className="imgRow2">
                    <img src={i_poster9H_1} className="imgShadow inf-gridgap"/>
                    <img src={i_poster9H_2} className="imgShadow inf-gridgap"/>
                </div>
                <div className="imgRow2">
                    <img src={i_poster9H_3} className="imgShadow inf-gridgap"/>
                    <img src={i_poster9V_3} className="imgShadow inf-gridgap"/>
                </div>
                <img src={i_poster_loop9} style={{margin:"8em auto"}}className="imgShadow imgFitHeight"/>

            </>} 
        ></ProjectSection>
        <ProjectSection
            left={"Issue 8"} leftType="gray"
            right={<>
                <div className="imgRow2">
                    <img src={i_poster8_1} className="imgShadow inf-gridgap"/>
                    <img src={i_poster8_2} className="imgShadow inf-gridgap"/>
                </div>
            </>} 
        ></ProjectSection>
        <Divider />


        <ProjectSection
            left={"Issue 7"} leftType=""
            right={<>
                <p>This was before I was on board, but I helped out with layout and modeling on this spread.</p>
                <br></br>
                
                <img src={i_spread1} className="imgShadow"/>
                <br></br>
                <img src={i_spread2} className="imgShadow"/>
                <br></br>
                <img src={i_spread3} className="imgShadow"/>
                <br></br>

            </>} 
        ></ProjectSection>



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Infinite;
