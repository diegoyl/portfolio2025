import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';
import thumbSrc from './thumb.jpg';

///// PROJECT IMG/VID IMPORTS
import i from './thumb.jpg';
// import i_XXX from "./XXX.jpg"

function Cont_RejisRave() {
  const projKey = "rejisrave"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Reji's Rave"
            subtitle="A game about a crab who loves to dance"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":["Game Dev", "React", "threeJS","Typescript"
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "react-three-fiber",
                        "Blender"

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
            left={"Play the Game"} leftType=""
            right={<>
                <p>
                    Collect shells, avoid the tide, and help Reji get his favorite song played at the rave.
                </p>
                <a href="https://rejis-rave.vercel.app/" target="_blank"><button id="rejiLink">PLAY GAME</button></a>
                <br></br>
                <br></br>
            </>} 
        ></ProjectSection>

        <Divider />


        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                I made this game because I wanted to try out react-three-fiber. I also wanted to finish a full game since the other games I have been working on are more complex and far from finished, so I tried keeping this one simpler, but I might return to it and add more features later.
                </p>
                <br></br>
                <p><strong>This game uses:</strong></p>
                <p><strong>GLB Models</strong> - downloaded from Poly Pizza and modified/retextured in Blender</p>
                <p><strong>Sound Effects</strong> - I either recorded new sounds or downloaded from Pixabay, then edited them for a more lo-fi sound</p>
                <p><strong>React, TypeScript</strong> - UI framework</p>
                <p><strong>Three.js</strong> - 3D graphics library</p>
                <p><strong>React Three Fiber</strong> - React renderer for Three.js</p>
                <p><strong>Zustand</strong> - State management</p>
                
            </>} 
        ></ProjectSection>



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_RejisRave;
