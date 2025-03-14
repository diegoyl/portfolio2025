import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
// import i_XXX from "./XXX.jpg"

import v_morphAnimation from "./logoMorph.mp4"
import i_ticketTable1 from "./ticketTable1.jpg"
import i_ticketTable2 from "./ticketTable2.jpg"
import i_igPoster_1 from "./ig-poster-1.jpg"
import i_igPoster_2 from "./ig-poster-2.jpg"
import i_igPoster_3 from "./ig-poster-3.jpg"
import i_logo_main from "./logo-main.png"
import i_logo_sideways from "./logo-sideways.png"
import i_logo_vertical from "./logo-vertical.png"
import i_posterWide1 from "./poster-wide1.png"
import i_posterWide2 from "./psoter-wide2.png"
import i_ticketSingle from "./ticket-final single.jpg"
import i_gala24_1 from "./gala24-1.png"
import i_gala24_2 from "./gala24-2.png"
import i_gala24_3 from "./gala24-3.png"
import i_gala24_4 from "./gala24-4.png"
import i_process from "./process.png"



function Cont_Mitgala() {
  const projKey = "mitgala"

  function redirectDelay(path) {
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }


  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="MIT Gala"
            subtitle="Branding for Infinite's fashion & design show"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Graphic Design",
                        "Branding",
                        "Animation",
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Illustrator",
                        "Photoshop",
                        "AfterEffects"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>




        <ProjectSection
            left={"Overview"} leftType=""
            right={<>
                <p>
                    MIT Gala is a fashion & design show hosted by <a href="https://infinitemagazine.mit.edu/" target="_blank">Infinite Magazine</a>. For the innaugural event in 2023, I designed logos, posters, social media content, and tickets.
                    <br></br>
                    <br></br>
                    You can read more about the event <a href="https://mitadmissions.org/blogs/entry/mit-gala/" target="_blank">here</a>.
                </p>    
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Logo"} leftType=""
            right={<>
                <img src={i_logo_main} style={{margin:"5em auto 7em"}}className='w80 sharpCorners' />
                <br></br>
                <br></br>
                <br></br>
                <p className='centerText'>Process + Variations</p>
                <div className='imgRow3'>
                    <img src={i_process} style={{width:"70%"}} className='sharpCorners' />
                    <img src={i_logo_sideways} style={{marginTop:"35%"}}className='w60 sharpCorners' />
                    <img src={i_logo_vertical} style={{marginTop:"10%",width:"12.2%"}} className='sharpCorners' />
                </div>
                <br></br>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>
        <ProjectSection
            left={"Animation"} leftType="gray"
            right={<>
                
                <video src={v_morphAnimation} loop muted autoPlay className='imgFitHeight'
                ></video>
                <br></br>
                <br></br>

            </>} 
        ></ProjectSection>
        <Divider />

        <ProjectSection
            left={"Pubbing"} leftType=""
            right={<>
                <p className='caption'>Physical Posters</p>

                <img src={i_posterWide1} className='sharpCorners imgShadow' />
                <br></br>
                <img src={i_posterWide2} className='sharpCorners imgShadowLight' />

                <br></br>
                <br></br>
                <br></br>
                <p className='caption'>Instagram Versions</p>

                <div className='imgRow3'>
                    <img src={i_igPoster_2} className='' />
                    <img src={i_igPoster_1} className='' />
                    <img src={i_igPoster_3} className='' />
                </div>
            </>} 
        ></ProjectSection>
        <Divider />


        <ProjectSection
            left={"Tickets"} leftType=""
            right={<>

                <img src={i_ticketSingle} style={{rotate:"-3deg",marginTop:"3em"}} className='sharpCorners imgShadow' />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <p className=''>Stamps! Gloria made stamps with the MIT Gala logo and other designs that were printed onto the back of a ticket whenever someone bought one.</p>
                <div className='imgRow2'>
                    <img src={i_ticketTable1} className='' />
                    <img src={i_ticketTable2} className='' />
                </div>
            </>} 
        ></ProjectSection>
        <Divider />


        <ProjectSection
            left={"Logo Uses"} leftType=""
            right={<>
                
                <p className=''>The first MIT Gala happened during my last year as a part of Infinite Magazine, but it's been cool seeing the logo still used for newer editions and seeing how the new designers make dope stuff with it! 
                </p>
                <br></br>
                <br></br>

                <div className='imgRow4'>
                    <img src={i_gala24_1} style={{rotate:"-1.3deg"}} className='imgShadowLight' />
                    <img src={i_gala24_2} style={{rotate:"1deg", marginTop:"3.6em"}} className='imgShadowLight' />
                    <img src={i_gala24_4} style={{rotate:"3deg", marginTop:"2em"}} className='imgShadowLight' />
                    <img src={i_gala24_3} style={{rotate:"-2deg", marginTop:"4em"}} className='imgShadowLight' />
                </div>
                <p className='centerText PangramDisplay'>↑ THESE ARE NOT MY WORK
                </p>
            </>} 
        ></ProjectSection>

    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_Mitgala;
