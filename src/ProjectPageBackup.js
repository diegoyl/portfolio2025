import React, {useState, useEffect} from 'react';
import './App.css';
import './ProjectPage.css';
import transition from './transition.js';
import NavBar from './NavBar';
import Footer from './Footer';


import ProjectHeader from './components/projectPage/ProjectHeader';

import Cont_Clock from './img/project/clock/Cont_Clock';
import Cont_Footwork from './img/project/footwork/Cont_Footwork';


import thumb from './img/thumb.jpg';

const projectDict = {
  "clock": {
    "title": "Clock",
    "subtitle": "This is the clk subtitle",
    "metaLists": [
      { "title":"SKILLS",
        "items":["3dp","rhino","item3"],
      },
      { "title":"TOOLS",
        "items":["arduino","item2","item3"],
      },
    ],
    "content": <Cont_Clock></Cont_Clock>,
  },  
  
  "footwork": {
    "title": "Footwork XVII",
    "subtitle": "This is the fw subtitle",
    "metaLists": [
      { "title":"SKILLS",
        "items":["gd","3d","pub"],
      },
      { "title":"TOOLS",
        "items":["blender","item2","item3"],
      },
    ],
    "content": <Cont_Footwork></Cont_Footwork>,
  },
}


function ProjectPage(props) {
    useEffect(() => {
        document.title = props.title
    },[])

  const project = "clock"

  return (
    <div>
      <NavBar></NavBar>


{/* thumbSrc={"./img/"+project+"/thumb"} */}


        <div id="projectPage" className="content-left content-margintop content-padding">
            <div className="splitGrid projectHeaderDiv">
              <div className='splitDivIndent splitDiv leftSplit'>

                {/* <ProjectTitles
                    title={"titulo"}
                    subtitle={"SUBtitulo"}
                ></ProjectTitles> */}

                {/* <h1>{projectTitle}</h1> */}
                <h2>This is a one sentence description of the project!</h2>

                <MetaList
                    title={ "LIST COMP" }
                    items={[ "meta1", "meta2", "meta3"]}
                ></MetaList>

                <div className="metaList">
                  <p className="metaHeader">SKILLS</p>
                  <p>Design</p>
                  <p>User Testing</p>
                  <p>Protopying</p>
                </div>

                <div className="metaList">
                  <p className="metaHeader">TOOLS</p>
                  <p>CAD</p>
                  <p>Python</p>
                  <p>3D-Printing</p>
                  <p>Laser Cutting</p>
                </div>

                <div className="metaList">
                  <p className="metaHeader">DURATION</p>
                  <p>2022-2024</p>
                </div>

                <div className="metaList">
                  <p className="metaHeader">LOCATION</p>
                  <p>MIT Voxel Lab</p>
                  <p>Cambridge, MA</p>
                </div>
              </div>


              <div className='splitDiv rightSplit'>
                  <img src={thumb} style={{"width":"100%","border-radius":"2%"}}/>
              </div>

            </div>

            <div className="divider dividerTop"></div>
            <div className="divider"></div>
            <div className="divider dividerBottom"></div>


            <div className="splitGrid">
              <div className='splitDiv leftSplit'>
                <h3>Sectijgon #3 Section #3 SBBBection #3</h3>
              </div>


              <div className='splitDiv rightSplit'>
                <p>Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. </p>
              </div>

            </div>

            <div className="divider dividerTop"></div>


            <div className="splitGrid">
              <div className='splitDiv leftSplit'>
                <h3>Design Process</h3>
              </div>


              <div className='splitDiv rightSplit'>
                <p>Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. Idk, some stuff about my process or soeemthign. </p>
              </div>

            </div>

            <div className="divider dividerTop"></div>

        </div>
        <Footer></Footer>
    </div>
  );
}

export default transition(ProjectPage);
