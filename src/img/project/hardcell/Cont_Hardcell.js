import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// project specific
import { useVideoAutoPlayback } from '../../../components/useVideoAutoPlayback';
import { useVideoAutoSound } from '../../../components/useVideoAutoSound';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
import v_keyboardBack from './keyboard-back.mp4';
import v_keyboardFront from './keyboard-front.mp4';
import { useState , useEffect} from 'react';

// import i_XXX from "./XXX.jpg"

function Cont_Hardcell() {
    const projKey = "hardcell"

    let [userInteracted, setUserInteracted] = useState(false);
    let [soundInfoHideClass, setSoundInfoHideClass] = useState("");

    useEffect(() => {
      window.scrollTo(0, 0);
      
      function enableSound() {
        setUserInteracted(true); 
        console.log("SOUND ENABLED");
        window.removeEventListener("click", enableSound);
        window.removeEventListener("keydown", enableSound);

        setSoundInfoHideClass("hide")
      }
    
      window.addEventListener("click", enableSound);
      window.addEventListener("keydown", enableSound);
    
      return () => {
        window.removeEventListener("click", enableSound);
        window.removeEventListener("keydown", enableSound);
      };
    },[])

    const [containerRef1, videoRef1] = useVideoAutoSound({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    vidID: "kbf",
    enabled: userInteracted
    });

    const [containerRef2, videoRef2] = useVideoAutoSound({
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
        vidID: "kbb",
        enabled: userInteracted
    });
    

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="HARDCELL®"
            subtitle="Interactive art + tech installation by Judith Barry"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Rapid Prototyping",
                        "Fabrication",
                        "Interaction Design",
                        "Circuit Design",
                        "CAD",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "3D Printing",
                        "Laser Cutting",
                        "Arduino",
                        "Rasp. Pi",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        <ProjectSection
            left={"Self-Typing Keyboard"} leftType=""
            right={<>
                <p id="hc-soundinfo" className={soundInfoHideClass+' hc-soundinfo centerText PangramHeader'} >Click anywhere for sound</p>
                <div style={{width:"100%"}} ref={containerRef1} >
                    <video id="kbf" ref={videoRef1} src={v_keyboardFront} width="100%" controls loop autoPlay muted></video>
                </div>
                <div style={{width:"100%"}} ref={containerRef2} >
                    <video id="kbb" ref={videoRef2} src={v_keyboardBack} width="100%" controls loop autoPlay muted></video>
                </div>
            </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={""} leftType=""
            right={<>
                <p>Working on adding more documentation...</p>
                
            </>} 
        ></ProjectSection>
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Hardcell;
