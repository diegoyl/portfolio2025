import ProjectHeader from "../../../components/projectPage/ProjectHeader";


import thumbSrc from "./thumb.jpg"

function Cont_Clock() {

  const project = "footwork";

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
      
      <ProjectHeader

        title={"Sequencer Clock"}
        subtitle={"This is the clk ssubt"}

        metaLists={[
          { "title":"SKILLS",
            "items":["clock","3d","pub"],
          },
          { "title":"TOOLS",
            "items":["clkblender","item2","item3"],
          },
        ]}
        thumbSrc={thumbSrc}

      ></ProjectHeader>



      <div className="splitGrid">
        <div className='splitDiv leftSplit'><h3>
          Section Title
        </h3></div>
        <div className='splitDiv rightSplit'>


          <p>clock RightSideContent</p>
        

        </div>
      </div>
      <div className="divider dividerTop"></div>




    </div>
  );
}

export default Cont_Clock;