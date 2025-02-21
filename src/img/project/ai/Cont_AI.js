import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists

///// PROJECT IMG/VID IMPORTS
import i_3dprint from "./3dprint.png"
import i_anim from "./anim.gif"
import i_process1 from "./process1.png"
import i_process2 from "./process2.png"
import i_seal1 from "./seal1.jpeg"
import i_seal2 from "./seal2.jpeg"
import i_seal3 from "./seal3.jpeg"
import i_still from "./still.png"
import i_thumb from "./thumb.jpg"


function Cont_AI() {
  const projKey = "ai"

  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            // title="AI Experiments"
            subtitle="AI Experiments"
            description="Playing around with ML models and AI tools"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Training Models",
                        "Python",
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "GANs",
                        "VAEs",
                        "PoseNet",
                        "Google Colab",
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        <ProjectSection
            left={"Generative Music Video"} leftType=""
            right={<>
                <p>
                Short animation I made VQGAN+CLIP. I used an album cover image and keywords as input to generate morphing videos. I synced the videos to the music in Premiere, matching each instrument sound to a different version generated with keywords related to the sound.                    
                </p>
                <br></br>
                <p className='caption'>
                    <strong>Song: </strong> Why Are Sundays So Depressing by The Strokes
                </p>
                

                <iframe src="https://www.youtube.com/embed/GqlpFMEHclQ?si=zIsQdsI_nJdK0iLB" frameborder="0" 
                allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen
                style={{"aspect-ratio": "1", "width":"70%","margin":"1em auto", display:"block"}}/>


            </>} 
        ></ProjectSection>

        <Divider />
        
        <ProjectSection
            left={"Monogram Stamp"} leftType=""
            right={<>
                <p>
                Made this for a class where we were exploring variational auto-encoders and training our own models with datasets that we generated. I trained mine on my handwriting, only using the letters from my full name. After training the model I had it generate new "letters" based on my handwriting. Since the results are a gradient space, I used them to create a morphing animation. 
                <br></br>
                <br></br>
                I then picked one of the images that I liked and I used it to create an old-fashioned stamp, like the ones used for wax seals. I turned the image into a 3D surface in Rhino, using the pixel value as a height parameter and then smoothing it out since the image is very low-res. To make the stamping mold, I 3D-printed a small disc with a negative of the generated surface. For a handle, I attached  a large screw to the disc, which had also provided the necessary weight for stamping. The wax is made from melted crayons, which allowed me to mix colors.
                </p>

                <img src={i_seal1} />

                <div className='imgRow2'>
                    <img src={i_seal2} />
                    <img src={i_seal3} />
                </div>

                <div className='imgRow2 darken'>
                    <img src={i_anim} />
                    <img src={i_still} />
                </div>


                <div className='imgRow3'>
                    <img src={i_3dprint} />
                    <img src={i_process1} />
                    <img src={i_process2} />
                </div>



                
            </>} 
        ></ProjectSection>

        <Divider />



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_AI;
