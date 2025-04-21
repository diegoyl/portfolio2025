import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// project specific
import { useVideoAutoPlayback } from '../../../components/useVideoAutoPlayback';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_chromeSpin from "./chrome-spin.gif"
import i_chromeSwivel from "./chrome-swivel.gif"
import i_donkSpin from "./donk-spin.gif"
import i_logoAlt1 from "./logo-alt1.png"
import i_logoAlt2 from "./logo-alt2.png"
import i_logoAlt3 from "./logo-alt3.png"
import i_logowshadow from "./logowshadow.png"
import i_program from "./program.png"
import i_shirtfull from "./shirtfull.png"
import i_shirtscanBack from "./shirtscan-back.jpg"
import i_shirtscanFront from "./shirtscan-front.jpg"
import i_thumb from "./thumb.jpg"
import i_thumbspin from "./thumbspin.gif"
import i_poster1 from "./poster1.jpg"
import i_poster2 from "./poster2.jpg"
import i_poster3 from "./poster3.jpg"
import i_window from "./window.jpg"
import v_reel from "./reel.mp4"


function Cont_Footwork18() {
  const projKey = "footwork"

  const [containerRef, videoRef] = useVideoAutoPlayback({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });


  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Footwork XVIII"
            subtitle={
                <>
                    Graphic design for <a href="https://www.instagram.com/mitridonkulous/" style={{color:"rgb(0, 200, 100)",textDecoration:"underline"}} target="_blank">Donk's</a> annual dance showcase

                </>
            }
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Branding",
                        "Graphic Design",
                        "Animation",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Photoshop",
                        "Illustrator",
                        "AfterEffects",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>



        <ProjectSection
            left={"Logo Designs"} leftType=""
            right={<>
                
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Primary"} leftType="gray"
            right={<>
                <img src={i_logowshadow} className="w90"/>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Variations"} leftType="gray"
            right={<>
                <div className="imgRow3">
                    <img src={i_logoAlt1} className="w50"/>
                    <img src={i_logoAlt2} className="w50"/>
                    <img src={i_logoAlt3} className="w50"/>
                    <br></br>
                    <br></br>

                </div>
                    
            </>} 
        ></ProjectSection>

        <Divider />

        <ProjectSection
            left={"T-Shirt"} leftType=""
            right={<>
                <img src={i_shirtfull} className="matchH" style={{rotate:"13deg",maxHeight:"90vh", width:"auto"}}/>
                <br></br>
                <br></br>
                <br></br>
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Front"} leftType="gray"
            right={<>
                <img src={i_shirtscanFront} className="w90"/>
                
            </>} 
        ></ProjectSection>


        <ProjectSection
            left={"Back"} leftType="gray"
            right={<>
                <img src={i_shirtscanBack} className="w90"/>
                
            </>} 
        ></ProjectSection>

        <Divider />


        <ProjectSection
            left={"Social Media Content"} leftType=""
            right={<>
                
                <div style={{width:"100%"}} ref={containerRef} >
                    <video id="reel" ref={videoRef} style={{height:"90vh", margin:"0 auto", display:"block" }}
                        src={v_reel} loop
                    ></video>
                </div>


                <br></br>
                <p className='caption'>Animation for Instagram. I photo-scanned the shirt and then animated it in After-Effects.</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Instagram Stickers"} leftType="gray"
            right={<>
                <div className="imgRow3">
                    <img src={i_chromeSpin} className="w60"/>
                    <img src={i_donkSpin} className="w40"/>
                    <img src={i_chromeSwivel} className="w60"/>
                </div>
                    <br></br>
                    <br></br>
                    
            </>} 
        ></ProjectSection>


        <ProjectSection
            left={"Program Cover"} leftType="gray"
            right={<>
                <img src={i_program} style={{maxHeight:"70vh", width:"auto"}}/>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Posters"} leftType="gray"
            right={<>

                <div className="imgRow3">
                    <img src={i_poster1} className=""/>
                    <img src={i_poster2} className=""/>
                    <img src={i_poster3} className=""/>
                </div>
                    <br></br>
                    <br></br>

                <img src={i_window} style={{maxHeight:"80vh", width:"auto"}}/>
                <p className='caption'>Big logo cutout I put on the window of Kresge</p>
            </>} 
        ></ProjectSection>
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Footwork18;
