import './App.css';
import './ProjectPage.css';

import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './NavBar';
import Footer from './Footer';


import Cont_Clock from './img/project/clock/Cont_Clock';
import Cont_Footwork from './img/project/footwork/Cont_Footwork';
import Cont_Squish from './img/project/squish/Cont_Squish';
import Cont_Forting from './img/project/forting/Cont_Forting';
import Cont_InfiniteMerch from './img/project/infinite-merch/Cont_InfiniteMerch';
import Cont_TangibleSampling from './img/project/tangible-sampling/Cont_TangibleSampling';
import Cont_Chair from './img/project/chair/Cont_Chair';
import Cont_Beatfarm from './img/project/beatfarm/Cont_Beatfarm';
import Cont_21m080 from './img/project/21m080/Cont_21m080';
import Cont_Mask from './img/project/mask/Cont_Mask';
import Cont_Hardcell from './img/project/hardcell/Cont_Hardcell';
import Cont_IMS from './img/project/ims/Cont_IMS';
import Cont_AI from './img/project/ai/Cont_AI';
import Cont_HonestType from './img/project/honest-type/Cont_HonestType';
import Cont_AdobeHome from './img/project/adobe-home/Cont_AdobeHome';
import Cont_BirthCertificate from './img/project/birth-certificate/Cont_BirthCertificate';
import Cont_PecanSans from './img/project/pecan-sans/Cont_PecanSans';
import Cont_Drift from './img/project/drift/Cont_Drift';
import Cont_Futbot from './img/project/futbot/Cont_Futbot';
import Cont_Pendulum from './img/project/pendulum/Cont_Pendulum';
import Cont_Infinite from './img/project/infinite/Cont_Infinite';
import Cont_Mitgala from './img/project/mitgala/Cont_Mitgala';
import Cont_Light from './img/project/light/Cont_Light';
import Cont_Pedals from './img/project/pedals/Cont_Pedals';
import Cont_Models from './img/project/models/Cont_Models';
import Cont_Posters from './img/project/posters/Cont_Posters';
import Cont_DAD from './img/project/dad/Cont_DAD';
import Cont_B2web from './img/project/b2web/Cont_B2web';
import Cont_Uniforms from './img/project/uniforms/Cont_Uniforms';
import Cont_TacticalType from './img/project/tactical-type/Cont_TacticalType';
import Cont_HTMAA from './img/project/htmaa/Cont_HTMAA';
import Cont_Golf from './img/project/golf/Cont_Golf';
import Cont_SplashCourse from './img/project/splash-course/Cont_SplashCourse';
// import Cont_NEWPROJ from './img/project/NEWPROJ/Cont_NEWPROJ';
// import Cont_Def from './img/project/ddef/Cont_Def';



const projComponentDict = {
  "footwork": [<Cont_Footwork />, "Footwork XVII"],
  "clock": [ <Cont_Clock />, "Sequencer Clock"],
  "squish": [ <Cont_Squish />, "Squish"],
  "forting": [ <Cont_Forting />, "Forting"],
  "infinite-merch": [ <Cont_InfiniteMerch />, "Infinite Merch"],
  "mitgala": [ <Cont_Mitgala />, "MIT Gala"],
  "tangible-sampling": [ <Cont_TangibleSampling />, "Tangible Sampling"],
  "htmaa": [ <Cont_HTMAA />, "How To Make (Almost) Anything"],
  "chair": [ <Cont_Chair />, "Chair"],
  "beatfarm": [ <Cont_Beatfarm />, "Beatfarm"],
  "21m080": [ <Cont_21m080 />, "21M.080 GUI"],
  "mask": [ <Cont_Mask />, "Mask"],
  "hardcell": [ <Cont_Hardcell />, "HARDCELL"],
  "ims": [ <Cont_IMS />, "Interactive Music Systems"],
  "ai": [ <Cont_AI />, "AI Experiments"],
  "honest-type": [ <Cont_HonestType />, "Honest Type"],
  "adobe-home": [ <Cont_AdobeHome />, "Adobe Home"],
  "birth-certificate": [ <Cont_BirthCertificate />, "Birth Certificate"],
  "pecan-sans": [ <Cont_PecanSans />, "Pecan Sans"],
  "drift": [ <Cont_Drift />, "Drift"],
  "futbot": [ <Cont_Futbot />, "Futbot"],
  "pendulum": [ <Cont_Pendulum />, "Pendulum Sculptures"],
  "infinite": [ <Cont_Infinite />, "Infinite"],
  "light": [ <Cont_Light />, "Wax Lamp"],
  "pedals": [ <Cont_Pedals />, "Guitar Pedals"],
  "models": [ <Cont_Models />, "Models"],
  "posters": [ <Cont_Posters />, "Posters"],
  "dad": [ <Cont_DAD />, "D.A.D."],
  "b2web": [ <Cont_B2web />, "Burton 2 Website"],
  "uniforms": [ <Cont_Uniforms />, "Uniforms"],
  "tactical-type": [ <Cont_TacticalType />, "Tactical Type"],
  "golf": [ <Cont_Golf />, "Golf [🚧Under Construction]"],
  "splash-course": [ <Cont_SplashCourse />, "Splash Course"],
  // "NEWPROJ": [ <Cont_NEWPROJ />, "NEWPROJ"],
}


function ProjectPage() {
    var [projectKey, setProjectKey] = useState()
    var [projComponent, setProjComponent] = useState()
    var [projTitle, setProjTitle] = useState()
    var [ctShow, setCtShow] = useState(false)
    const location = useLocation();

    
    useEffect(() => {
        var path = location.pathname
        var projectKeyRemoveSlash = path.slice(1)
        console.log("projectKey = ", projectKeyRemoveSlash)

        setProjectKey(projectKeyRemoveSlash)
        setProjComponent(projComponentDict[projectKeyRemoveSlash][0])
    
        var pTitle = projComponentDict[projectKeyRemoveSlash][1]
        document.title = pTitle;
        setProjTitle(pTitle);

        window.addEventListener('scroll', showCenterTitle);

        return () => window.removeEventListener('scroll', showCenterTitle); 
    },[])

    function showCenterTitle() {
      if (window.scrollY > 800) {
        setCtShow(true)
      } else {
        setCtShow(false)
      }

    }

  return (
    <div>
      <NavBar centerTitle={projTitle} ctShow={ctShow}></NavBar>

      {projComponent ? (
          projComponent     
      ) : ( <></>)}

      <Footer></Footer>
    </div>
  );
}

export default ProjectPage;
