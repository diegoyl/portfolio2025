import './App.css';
import './Projects.css';
import './Animations.css';
import NavBar from './NavBar';
import ProjectThumb from './ProjectThumb';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from "react-router-dom"


function Projects(props) {
    useEffect(() => {
        document.title = props.title
    },[])

    const location = useLocation();
    const state = location.state;
    var categoryPassedIn = state["categoryPassedIn"]
    
    console.log("Cat Pass In: ",categoryPassedIn)
    if (!categoryPassedIn) {
        categoryPassedIn = "all";
        console.log("\tChanged to: ",categoryPassedIn)
    }
    var [category, setCategory] = useState(categoryPassedIn)
    var [gridType, setGridType] = useState("grid1")

    function changeCategory(cat)  {
        // console.log(cat)
        setCategory(cat)
    }

    function changeGridType(gt)  {
        if (gt!=gridType){
            const projectGrid = document.getElementById('projectGrid')
            // void projectGrid.offsetWidth; // trigger reflow
            projectGrid.classList.add('gridFade'); // start animation
            
            
            setTimeout(() => {
                setGridType(gt)
                projectGrid.classList.remove('gridFade'); // reset animation
            },700)
        }
    }
  return (
    <div>
      <NavBar page={"projects"}></NavBar>

        <div className="content-padding splitGrid">

            <div className='splitDiv leftSplit'>
                <div id="projects-menu-fixed">
                    <div id="projects-menu-tablecell">
                        <div id="projects-menu-inner">
                            <p className={category==="all" ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("all")}>ALL</p>
                            <p className={category==="design" ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("design")}>DESIGN</p>
                            <p className={category==="engineering" ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("engineering")}>ENGINEERING</p>
                            <p className={category==="coding" ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("coding")}>CODING</p>
                            <p className={category==="interactive" ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("interactive")}>INTERACTIVE</p>
                            <p className={category==="graphic design"  ? "activeCategory":"inactiveCategory"} onClick={() => changeCategory("graphic design")}>GRAPHIC DESIGN</p>
                            <div id="gridBtnContainer">
                                <button id="gridBtn1" className={gridType==="grid1" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid1")}></button>
                                <button id="gridBtn2" className={gridType==="grid2" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid2")}></button>
                                <button id="gridBtn3" className={gridType==="grid3" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid3")}></button>
                            </div>
                            <br></br>
                            {/* TODO LINK THIS */}
                            <p className="inactiveCategory" id="archiveLink" onClick={() => changeCategory("archive")}>ARCHIVE</p>

                        </div>
                    </div>
                    <div id="projects-menu-tablecell">
                    </div>

      
                </div>

            </div>


            <div className='splitDiv rightSplit content-left'>
                <div id="projectGrid" className={gridType}>

                    <Link to="/projectpage1"
                        state={{ categoryPassedIn: "all" }}>
                            <ProjectThumb 
                                name={"Project Districts"}
                            ></ProjectThumb>                
                    </Link>


                    <Link to="/projectpage2"
                        state={{ categoryPassedIn: "all" }}>
                            <ProjectThumb 
                                name={"ProJect No. 2"}
                            ></ProjectThumb>
                    </Link>

                    <Link to="/projectpage3"
                        state={{ categoryPassedIn: "all" }}>
                            <ProjectThumb 
                                name={"proyecto] No. 3"}
                            ></ProjectThumb>
                    </Link>

                    <Link to="/projectpage3"
                        state={{ categoryPassedIn: "all" }}>
                            <ProjectThumb 
                                name={"proyecto] No. 3"}
                            ></ProjectThumb>
                    </Link>
                    
                </div>
            </div>


        </div>

        <Footer></Footer>

    </div>
  );
}

export default Projects;
