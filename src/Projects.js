import './App.css';
import './Projects.css';
import './Animations.css';
import transition from './transition.js';
import NavBar from './NavBar';
import ProjectThumb from './ProjectThumb';
import Footer from './Footer';
import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"



import Thumb_Clock from './img/project/clock/thumb.jpg';
import Thumb_Footwork from './img/project/footwork/thumb.jpg';



const thumbDataDict = {
    "footwork":[ Thumb_Footwork, "Footwork XVII", "Project P.g Subtitle FW" ],
    "clock": [ Thumb_Clock, "Sequencer Clock", "CLK Project Page st FW" ],
}

const categoryDict = {
    "all": [
        "footwork",
        "clock",
    ],
    "design": [
        "clock",
        "footwork",
        "footwork",
    ],
    "engineering": [
        "clock",
        "clock",
        "clock",
        "clock",
        "clock",

    ],
    "coding": [
        "clock",
        "clock",
        "footwork",
    ],
    "interactive": [
        "clock",

    ],
    "graphic design": [
        "footwork",

    ],
}  
  
function Projects() {
    var [category, setCategory] = useState("all")
    var [gridType, setGridType] = useState("grid1")
    
    console.log("defCat= ",category)
    
    const location = useLocation();
    const navigate = useNavigate();
    var categoryPassedIn = false;
    useEffect(() => {
        document.title = "Projects"
        
        var searchData = location.search + "";
        if (searchData) {
            categoryPassedIn = searchData.split("=")[1];
            console.log("SD: ",searchData)
            setCategory(categoryPassedIn)
            navigate('/projects', { replace: true });
        } else {
            setCategory("all")
        }
    },[])

    
    function changeCategory(cat)  {
        // console.log(cat)
        window.scrollTo({top: 0, behavior: 'smooth'});

        const projectGrid = document.getElementById('projectGrid')
        projectGrid.classList.add('gridFade'); // start animation            

        setTimeout(() => {

            setCategory(cat)
            projectGrid.classList.remove('gridFade'); // reset animation
        },700)
    }

    function changeGridType(gt)  {
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (gt!=gridType){
            const projectGrid = document.getElementById('projectGrid')
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

        <div className="content-padding splitGrid projectsMarginTop">

            <div className='splitDiv leftSplit'>
                <div id="projects-menu-fixed">
                    
                    <div id="projects-menu-inner">

                        {Object.keys(categoryDict).map(function(categoryName,index) {
                            return (
                                <p key={index} className={category===categoryName ? "activeCategory":"inactiveCategory"} 
                                onClick={() => changeCategory(categoryName)}
                                >{categoryName.toUpperCase()}</p>
                            )
                        })}

                        <div id="gridBtnContainer">
                            <button id="gridBtn1" className={gridType==="grid1" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid1")}></button>
                            <button id="gridBtn2" className={gridType==="grid2" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid2")}></button>
                            <button id="gridBtn3" className={gridType==="grid3" ? "gridBtnActive gridButton":"gridButton"} onClick={() => changeGridType("grid3")}></button>
                        </div>

                        <br></br>

                        {/* TODO LINK THIS */}
                        {/* <p className="inactiveCategory" id="archiveLink" onClick={() => changeCategory("archive")}>ARCHIVE</p> */}
                    
                    </div>
      
                </div>

            </div>


            <div className='splitDiv rightSplit content-left'>
                <div id="projectGrid" className={gridType}>

                    {category ? (
                        <>
                        {categoryDict[category].map(function(projName,index) {
                            return (
                                <Link to={"/"+projName} key={index}> 
                                    <ProjectThumb 
                                        thumbSrc={thumbDataDict[projName][0]}
                                        title={thumbDataDict[projName][1]}
                                        subtitle={thumbDataDict[projName][2]}
                                    ></ProjectThumb>                
                                </Link>
                            )
                        })}
                        </>
                    ) : (<></>)
                    }   
                    
                </div>
            </div>


        </div>

        <Footer></Footer>

    </div>
  );
}

export default transition(Projects);
