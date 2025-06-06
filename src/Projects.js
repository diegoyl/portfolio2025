import './App.css';
import './Projects.css';
import './Animations.css';

import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import useImagePreloader from './useImagePreloader'

import transition from './transition.js';

import NavBar from './NavBar';
import ProjectThumb from './ProjectThumb';
import ProjectThumbRedirect from './ProjectThumbRedirect';
import Footer from './Footer';

import Thumb_Clock from './img/project/clock/thumb.jpg';
import Thumb_Footwork from './img/project/footwork/thumbspin.gif';
import Thumb_Squish from './img/project/squish/thumb.jpg'
import Thumb_Forting from './img/project/forting/thumb.jpg'
import Thumb_InfiniteMerch from './img/project/infinite-merch/thumb.jpg'
import Thumb_Mitgala from './img/project/mitgala/thumb.jpg'
import Thumb_TangibleSampling from './img/project/tangible-sampling/thumb.jpg'
import Thumb_Chair from './img/project/chair/thumb.jpg'
import Thumb_Beatfarm from './img/project/beatfarm/thumb.jpg'
import Thumb_21m080 from './img/project/21m080/thumb.jpg'
import Thumb_Mask from './img/project/mask/thumb.jpg'
import Thumb_Hardcell from './img/project/hardcell/thumb.jpg'
import Thumb_IMS from './img/project/ims/thumb.jpg'
import Thumb_AI from './img/project/ai/thumb.gif'
import Thumb_TacticalType from './img/project/tactical-type/thumb.gif'
import Thumb_HonestType from './img/project/honest-type/thumb.jpg'
import Thumb_AdobeHome from './img/project/adobe-home/thumb.jpg'
import Thumb_BirthCertificate from './img/project/birth-certificate/thumb.jpg'
import Thumb_PecanSans from './img/project/pecan-sans/thumb.jpg'
import Thumb_Drift from './img/project/drift/thumb.jpg'
import Thumb_Futbot from './img/project/futbot/thumb.jpg'
import Thumb_Pendulum from './img/project/pendulum/thumb.jpg'
import Thumb_Infinite from './img/project/infinite/thumb.jpg'
import Thumb_Light from './img/project/light/thumb.jpg'
import Thumb_Pedals from './img/project/pedals/thumb.jpg'
import Thumb_Models from './img/project/models/thumb.jpg'
import Thumb_Posters from './img/project/posters/thumb.jpg'
import Thumb_DAD from './img/project/dad/thumb.jpg'
import Thumb_B2Web from './img/project/b2web/thumb.jpg'
import Thumb_HTMAA from './img/project/htmaa/thumb.gif'
import Thumb_Golf from './img/project/golf/thumb.png'
// import Thumb_NEWPROJ from './img/project/NEWPROJ/thumb.jpg'

const preloadSrcList = [
    Thumb_Clock,
    Thumb_Footwork,
    Thumb_Squish,
    Thumb_Forting,
    Thumb_InfiniteMerch,
    Thumb_Mitgala,
    Thumb_TangibleSampling,
    Thumb_Chair,
    Thumb_Beatfarm,
    Thumb_21m080,
    Thumb_Mitgala,
    Thumb_Mask,
    Thumb_Hardcell,
    Thumb_IMS,
    Thumb_AI,
    Thumb_TacticalType,
    Thumb_HonestType,
    Thumb_AdobeHome,
    Thumb_BirthCertificate,
    Thumb_PecanSans,
    Thumb_Drift,
    Thumb_Futbot,
    Thumb_Pendulum,
    Thumb_Infinite,
    Thumb_Light,
    Thumb_Pedals,
    Thumb_Models,
    Thumb_Posters,
    Thumb_DAD,
    Thumb_B2Web,
    Thumb_HTMAA,
    Thumb_Golf,
    // Thumb_NEWPROJ,
]

const thumbDataDict = {
    // "defaultName": [ Thumb_DefaultImg, "Thumb Title", "Thumb Subtitle" , redirect to other site?],
    "clock": [ Thumb_Clock, "Sequencer Clock", "An instrument that lets you play with time" , false],

    "squish": [ Thumb_Squish, "Squish", "A squishable & modular music interface", false],
    
    "forting": [ Thumb_Forting, "Forting", "A kit for pillow forting outdoors", false],
    "ai": [ Thumb_AI, "AI Experiments", "", false],
    "b2web": [ Thumb_B2Web, "Burton 2 Website", "", false],
    "beatfarm": [ Thumb_Beatfarm, "Beatfarm", "Hip-hop beat-making game", false],
    "birth-certificate": [ Thumb_BirthCertificate, "My Birth Certificate??", "kinda", "https://diegoyl.github.io/newspaper-birth-certificate/"],
    "tactical-type": [ Thumb_TacticalType, "Tactical Type", "A typeface made from a socccer game", "https://diegoyl.github.io/tactical-type/"],
    "htmaa": [ Thumb_HTMAA, "How To Make (Almost) Anything", "", "https://fab.cba.mit.edu/classes/863.22/Architecture/people/Diego/"],
    
    "chair": [ Thumb_Chair, "Pair Chair", "Re-assembleable chair made of two identical parts", false],
    "dad": [ Thumb_DAD, "D.A.D.", "A band I am a part of!", false],
    "drift": [ Thumb_Drift, "Drift", "Intentional error in machine-aided drawings", false],
    "footwork":[ Thumb_Footwork, "Footwork XVII", "Branding & T-Shirt Design" , false],
    "21m080": [ Thumb_21m080, "21M.080 Interface", "Making music with live-coding", false],
    "adobe-home": [ Thumb_AdobeHome, "Adobe Home", "", false],
    "infinite-merch": [ Thumb_InfiniteMerch, "Infinite Merch", "Hand-printed T-Shirts, stickers, and totes for Infinite Magazine", false],
    "mitgala": [ Thumb_Mitgala, "MIT Gala", "Branding for Infinite's innaugural fashion show", false],
    "infinite": [ Thumb_Infinite, "Infinite Magazine", "I was the Visual Design Director for MIT's fashion magazine", false],
    "tangible-sampling": [ Thumb_TangibleSampling, "Tangible Sampling", "Collaborative music-making installation", false],

    "hardcell": [ Thumb_Hardcell, "HARDCELL®", "", false],
    "futbot": [ Thumb_Futbot, "Futbot", "Robot for 2.007 competition ", false],
    
    "golf": [ Thumb_Golf, "Golf", " [🚧Under Construction]", "https://diegoyl.github.io/golf/"],
    // "NEWPROJ": [ Thumb_NEWPROJ, "NEWPROJ", "", false],

    // "ims": [ Thumb_IMS, "Interactive Music Systems", "subtitle", false],
    
    "honest-type": [ Thumb_HonestType, "Honest Type", "Exploring our trust in the words of the digital world", false],
    "pecan-sans": [ Thumb_PecanSans, "Pecan Sans", "An alphabet made from pecans", false],
    
    // "posters": [ Thumb_Posters, "Posters", "subtitle", false],

    // "mask": [ Thumb_Mask, "Mask", "subtitle", false],
    // "pendulum": [ Thumb_Pendulum, "Pendulum Sculptures", "subtitle", false],
    // "light": [ Thumb_Light, "Wax Lamp", "subtitle", false],
    // "pedals": [ Thumb_Pedals, "Guitar Pedals", "subtitle", false],
    // "models": [ Thumb_Models, "Miniatures", "subtitle", false],
}

const categoryDict = {
    "all": [
        "beatfarm",
        "squish",
        "clock",
        "forting", // TODO: add forting process
        "tangible-sampling", 
        "footwork",
        "21m080",
        "infinite-merch",
        "mitgala",
        "htmaa",
        "chair",
        "ai",
        "infinite", //  TODO: infinite unfinished
        "hardcell",
        "tactical-type",
        "birth-certificate",
        "honest-type",
        "golf",
        "pecan-sans",
        "drift",
        "adobe-home",
        "futbot",

        "b2web",
        
        // "NEWPROJ",



        // "hardcell",

        // "ims",

        // "mask",
        // "honest-type",
        // "pecan-sans",
        // "pendulum",
        // "light",
        // "pedals",
        // "models",
        // "posters",
    ],
    "design": [
        
        "squish",
        "clock",
        "forting",
        "tangible-sampling", 
        "chair",
        "adobe-home",
        "drift",

    ],
    "coding/ux": [
        "beatfarm",
        "21m080",
        "golf",
        "ai",
        "b2web",
        // TODO: add this website
    ],
    "engineering": [
        "futbot",
        "hardcell",
        "htmaa",
    ],
    "interactive": [
        "clock",
        "squish",
        "forting",
        "tangible-sampling", 
        "beatfarm",
        "tactical-type",
        "birth-certificate",
        "golf",
        
    ],
    "graphic design": [
        "footwork",
        "infinite-merch",
        "mitgala",
        "infinite",
        "tactical-type",
        "honest-type",
        "pecan-sans",
        "drift",
        "birth-certificate",
    ],
}  

  
function Projects() {




    var [erasing, setErasing] = useState(false)
    function redirectDelay(path) {
      setErasing(true)
      setTimeout(() => {
        window.location.href = path;
      }, 310)
    }
    var [category, setCategory] = useState("all")
    var [gridType, setGridType] = useState("grid1")
    
    console.log("defCatInit= ",category)
    
    const location = useLocation();
    const navigate = useNavigate();
    var categoryPassedIn = false;
    useEffect(() => {
        document.title = "Projects"
        
        // var searchData = location.search + "";
        // if (searchData) {
        //     categoryPassedIn = searchData.split("=")[1];
        //     console.log("SD: ",searchData)
        //     if (categoryPassedIn="coding"){
        //         categoryPassedIn = "coding/ux"
        //     }
        //     setCategory(categoryPassedIn)
        //     navigate('/projects', { replace: true });
        // } else {
        //     setCategory("all")
        // }

        // var searchData = location.search + "";
        // console.log("SD1: ",window.location.hash.replace("#", "")) 
        // var pathname = location.pathname
        var pathnameCategory = location.pathname.split("-")[1]
        console.log("pathnameCat: ", pathnameCategory)

        if (pathnameCategory) {
            categoryPassedIn = pathnameCategory;
            console.log("split(-)[1]: ", categoryPassedIn)
            
            if (categoryPassedIn=="coding") {
                categoryPassedIn = "coding/ux"
            }

            setCategory(categoryPassedIn)

            navigate('/projects', { replace: true });
        } else {
            setCategory("all")
        }
        console.log("defCat_= ",category)



    // const { imagesPreloaded } = useImagePreloader(preloadSrcList)

        // if (!imagesPreloaded) {
        //     console.log("Pre-Loading Images")
        //     checkPreload()
        // } else {
        //     setErasing(false)
        //     console.log("*** Images Loaded at 0 !")
        // }
    
    },[])

    // function checkPreload() {
    //     if (imagesPreloaded) {
    //         console.log("*** Images Loaded !")
    //         setErasing(false)
    //     } else {
    //         setTimeout(()=> {
    //             checkPreload()
    //         },200)
    //     }

    // }
    
    function changeCategory(cat) {
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
        if (gt!=gridType) {
            const projectGrid = document.getElementById('projectGrid')
            projectGrid.classList.add('gridFade'); // start animation            
            
            setTimeout(() => {
                setGridType(gt)
                projectGrid.classList.remove('gridFade'); // reset animation
            },700)
        }
    }


  function toCategoriesTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }


  return (
    <div style={{width:"100%"}}>
      <NavBar page={"projects"}></NavBar>
      <div id="erase-container" className={erasing ? "beginErase transition-container":"transition-container"}>
            {/* <p>...</p> */}
      </div>

        <div id="projects" className="content-padding splitGrid projectsMarginTop">

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

            {/* TODO: CHANGE 1 COL GRID TO RECTANGLE IMAGES */}
            <div className='splitDiv rightSplit content-left'>
                <div id="projectGrid" className={gridType}>

                    {category ? (
                        <>
                        {categoryDict[category].map(function(projName,index) {

                            if (thumbDataDict[projName][3]) {
                                return (
                                    <div className="thumbLinkContainer" key={projName}>
                                            
                                        <ProjectThumbRedirect 
                                            thumbSrc={thumbDataDict[projName][0]}
                                            title={thumbDataDict[projName][1]}
                                            subtitle={thumbDataDict[projName][2]}
                                            redirect={thumbDataDict[projName][3]}

                                        ></ProjectThumbRedirect>  

                                    </div>
                                )
                            } else {

                                return (
                                    <div onClick={() => {redirectDelay("/" + projName)}} className="thumbLinkContainer" key={projName}>
                                            
                                        <ProjectThumb 
                                            thumbSrc={thumbDataDict[projName][0]}
                                            title={thumbDataDict[projName][1]}
                                            subtitle={thumbDataDict[projName][2]}
                                        ></ProjectThumb>  

                                    </div>
                                )
                            }

                        })}
                        </>
                    ) : (<></>)
                    }   
                </div>
            </div>
        </div>

        <div id="toCategoriesDiv">
            <p onClick={() => toCategoriesTop()} >⌃<br></br>CATEGORIES</p>
        </div>


        <Footer></Footer>

    </div>
  );
}

export default transition(Projects);
