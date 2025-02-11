import React, {useState, useEffect} from 'react';
import './App.css';
import './ProjectPage.css';
import transition from './transition.js';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


import Cont_Clock from './img/project/clock/Cont_Clock';
import Cont_Footwork from './img/project/footwork/Cont_Footwork';



const projComponentDict = {
  "footwork": [<Cont_Footwork />, "Footwork XVII"],
  "clock": [ <Cont_Clock />, "Sequencer Clock"],
}


function ProjectPage() {
    var [projectKey, setProjectKey] = useState()
    var [projComponent, setProjComponent] = useState()
    const location = useLocation();

    useEffect(() => {
        var path = location.pathname
        var projectKeyRemoveSlash = path.slice(1)
        console.log("projectKey = ", projectKeyRemoveSlash)

        setProjectKey(projectKeyRemoveSlash)
        setProjComponent(projComponentDict[projectKeyRemoveSlash][0])
    
        document.title = projComponentDict[projectKeyRemoveSlash][1]
    },[])



  return (
    <div>
      <NavBar></NavBar>

      {projComponent ? (
          projComponent     
      ) : ( <></>)}

      <Footer></Footer>
    </div>
  );
}

export default transition(ProjectPage);
