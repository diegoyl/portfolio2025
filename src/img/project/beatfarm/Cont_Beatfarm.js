import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_mainPage from "./main-page.jpg"
import i_launchpadPage from "./launchpad-page.jpg"
import i_recordPage from "./record-page.jpg"
import i_trackLabeled from "./trackLabeled.png"
import i_kickLabeled from "./kickLabeled.png"
import i_launchpad from "./launchpad.png"


function Cont_Beatfarm() {
  const projKey = "beatfarm"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Beatfarm"
            subtitle="Hip-hop beat-making and sampling game"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Full Stack Development",
                        "UI/UX Design",
                        "Animation",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Python",
                        "Kivy",
                        "Figma",
                        "Illustrator",
                ]},
                {"title":"COLLABORATORS",
                    "items":[
                        "Lucy Kim",
                        "Collin Wen",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        <ProjectSection
            left={"Try It Out!"} leftType=""
            right={<>
                <p>
                    The original app was made in Kivy/Python, so I remade a web version in JavaScript. I used an existing <a href="https://github.com/cwilso/MIDIDrums" target="_blank">step-sequencer library</a> that already had many of the functionalities we made for the original app. If there are any bugs in this version, I blame it on the library...
                </p>
                <a href="https://diegoyl.github.io/beatfarm-web/" target="_blank"><button id="bfwaLink">WEBAPP LINK</button></a>
                <br></br>
                <br></br>
            </>} 
        ></ProjectSection>
        <Divider />
            
        <ProjectSection
            left={"How It Works"} leftType=""
            right={<>
                <p>
                    Beatfarm is a beginner friendly game for learning how to make hip-hop beats and sampling. Pre-programmed patterns can be mixed and matched while also introducing people to different styles of hip-hop. Beats can be further customized by recording your own sounds for each instrument.
                </p>
                <img src={i_mainPage} className="w80 imgShadow" style={{margin:"2em auto"}}/>
            </>} 
        ></ProjectSection>

        
        <ProjectSection
            left={"Database"} leftType="gray"
            right={<>
                <p>
                    The database stores the audio sample files and rhythmic patterns. Each instrument has a different pattern file for up to 8 different hip-hop styles, such as boom-bap, west coast, trap, etc. In each pattern file, three different patterns are stored, corresponding to threee levels of complexity. Each pattern is made up of 16 periods or x's, with the x representing a note/drum hit. If it is a pitched instrument, an array of pitches is added, since the x's only contain rhythmic info. An example synth pattern is shown below, each row is a different pattern:
                </p>
                <p className='w80 codeText'>

                x...............x...........x... A#,F#,F
                <br></br>
                x.......x.......x...x.......x... A#,A#,F#,F#,F
                <br></br>
                x...x...x.......x...x.......x... A#,C,A#,F#,A,F
                <br></br>


                </p>
                <p>
                    These arrays are parsed by a function that checks if a note should be played on the current beat.
                </p>
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Sound Processing"} leftType="gray"
            right={<>
                <p>
                    Samples are mixed and modified using the <a target="_blank" href="https://github.com/spotify/pedalboard">Pedalboard</a>  library, which provides functions for pitch-shifting and effects like reverb, distortion, compression, and gain. 
                    <br></br>
                    <br></br>
                    Some instruments only have one sample file, so to create different notes they need to be pitched up/down. Each note's volume can also be adjusted in the game, so the sound processing changes the characteristics of the sample based on if it is loud/soft, such as adding more high frequencies for a louder drum hit. 
                    <br></br>
                    <br></br>
                    Also, each instrument has its own specific processing. For example, the kick samples will have the low end boosted and the brass samples have some distortion and reverb added. Since samples can be reassigned to different tracks, the original sample is stored and a copy is modified whil being used for an instrument.
                </p>
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Frontend"} leftType="gray"
            right={<>
                <p>
                    Includes user controls for live production and sampling, as well as a display. There are 5 instrument tracks (3 drums, 2 melodic) with adjustable properties like style, sample type, rhythmic complexity, and volume. Each track begins by using default, normal sounding samples, but once you record your own samples you can use the Organic mode.
                </p>

                <div className='imgRow2'>
                    <img src={i_kickLabeled} style={{width:"70%"}}/>
                    <img src={i_trackLabeled} style={{width:"90%"}}/>

                </div>

                <br></br>
                <br></br>
                <br></br>
                <p>
                    The record page allows you to record your own sample and cut it to the desired length. You can also reassign samples to different instruments.
                </p>
                <img src={i_recordPage} className="w80 imgShadow" style={{margin:"2em auto"}}/>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Hardware"} leftType="gray"
            right={<>
                <p>
                    You can also control the system with an external launchpad. There is a page that shows you the controls for the launchpad.
                </p>
                <img src={i_launchpad} className="w30" style={{margin:"2em auto"}}/>

                <img src={i_launchpadPage} className="w80 imgShadow" style={{margin:"2em auto"}}/>
            </>} 
        ></ProjectSection>


        <div className='centerText'>
            <a href="https://diegoyl.github.io/beatfarm-web/" target="_blank"><button id="bfwaLink" style={{fontSize:"4em", marginTop:"2em"}}>TRY IT OUT!</button></a>
        </div>

    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Beatfarm;
