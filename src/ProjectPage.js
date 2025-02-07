import './App.css';
import './ProjectPage.css';
import NavBar from './NavBar';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';

import thumb from './img/thumb.jpg';

function ProjectPage(props) {
    useEffect(() => {
        document.title = props.title
    },[])


  return (
    <div>
      <NavBar></NavBar>

        <div id="projectPage" className="content-left content-margintop content-padding">

            <div className="splitGrid projectHeaderDiv">
              <div className='splitDivIndent splitDiv leftSplit'>
                <h1>Project Title</h1>
                <h2>This is a one sentence description of the project, catchy!</h2>

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

export default ProjectPage;
