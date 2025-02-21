import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists

///// PROJECT IMG/VID IMPORTS
import i_homepage from './homepage.jpg';
// import i_XXX from "./XXX.jpg"

function Cont_B2Web() {
  const projKey = "b2web"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Burton 2 Website"
            subtitle="Redesigned the website for my dorm floor"
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "HTML/CSS",
                        "JavaScript",
                        "Web Design",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>

        <img src={i_homepage} className="imgShadow" style={{width:"80%",display:"block",margin:"2em auto"}}/>

        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_B2Web;
