import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
import i_page1 from "./page1.jpg"
import i_page2 from "./page2.jpg"

function Cont_PecanSans() {
  const projKey = "pecan-sans"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader


            title="Pecan Sans"
            subtitle="An alphabet made from pecans "
            
            metaLists={[
                {"title":"",
                    "items":[
                        "Fall 2020"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>

        <img src={i_page1} />
        <img src={i_page2} />

        
    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_PecanSans;
