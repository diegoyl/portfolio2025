import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import thumbSrc from './thumb.jpg';

///// PROJECT IMG/VID IMPORTS
import i from './thumb.jpg';


function Cont_() {
    
  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader
            title="Default"
            subtitle="subtitle"
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "skill1",
                        "skill2",
                        "skill3"
                ]},
                {"title":"TOOLS",
                    "items":[
                        "tool1",
                        "tool2",
                        "tool3",
                        "tool4"
                ]},
            ]}
            thumbSrc={thumbSrc}
        ></ProjectHeader>


        {/* PROJECT CONTENT */}

        <div className="splitGrid">
            <div className='splitDiv leftSplit'><h3>
                Section Title
            </h3></div>

            <div className='splitDiv rightSplit'>

                <p>Words words words...</p>
                <img src={thumbSrc} style={{"width":"100%"}}/>

            </div>
        </div><div className="divider dividerTop"></div>



        <div className="splitGrid">
            <div className='splitDiv leftSplit'><h3>
                Section Title #2
            </h3></div>

            <div className='splitDiv rightSplit'>

                <p>Palabras words palabras...</p>
                <img src={thumbSrc} style={{"width":"100%"}}/>

            </div>
        </div><div className="divider dividerTop"></div>





    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_;
