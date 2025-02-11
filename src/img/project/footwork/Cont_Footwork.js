import ProjectHeader from "../../../components/projectPage/ProjectHeader";

import thumbSrc from "./thumb.jpg"


function Cont_Footwork() {

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
      
      <ProjectHeader

        title={"Footwork XVII"}
        subtitle={"This is the fw ssubt"}

        metaLists={[
          { "title":"SKILLS",
            "items":["gd","3d","pub"],
          },
          { "title":"TOOLS",
            "items":["blender","item2","item3"],
          },
        ]}
        thumbSrc={thumbSrc}

      ></ProjectHeader>



      {/* PROJECT CONTENT */}

      <div className="splitGrid">
        <div className='splitDiv leftSplit'><h3>
          Section Title
        </h3></div>
        <div className='splitDiv rightSplit'>


          <p>RightSideContent</p>
        

        </div>
      </div>
      <div className="divider dividerTop"></div>




    </div>
  );
}

export default Cont_Footwork;
