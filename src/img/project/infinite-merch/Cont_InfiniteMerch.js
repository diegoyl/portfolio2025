import ProjectHeader from '../../../components/projectPage/ProjectHeader';
import ProjectSection from '../../../components/projectPage/ProjectSection';
import Divider from '../../../components/projectPage/Divider';

// 1: Cont_XXX   2: projKey  3: title,subtitle,lists  
// Projects.js : update array, imports, and categories

///// PROJECT IMG/VID IMPORTS
import i_ from './thumb.jpg';
// import i_XXX from "./XXX.jpg"
import i_iss11 from "./iss11.png"
import i_issXmerch from "./issXmerch.jpg"
import i_issXmerch2 from "./issXmerch2.jpg"
import i_stickers from "./stickers.jpg"
import i_tote from "./tote.jpg"
import i_sweatshirt1 from "./sweatshirt1.jpg"
import i_sweatshirt2 from "./sweatshirt2.JPG"



function Cont_InfiniteMerch() {
  const projKey = "infinite-merch"

  function redirectDelay(path) {
    setTimeout(() => {
      window.location.href = path;
    }, 310)
  }


  return (
    <div id="projectPage" className="content-left content-margintop content-padding">
        <ProjectHeader

            title="Infinite Merch"
            subtitle="T-Shirts, stickers, and totes for Infinite Magazine"
            
            metaLists={[
                {"title":"SKILLS",
                    "items":[
                        "Graphic Design",
                        "Branding",
                        "Screen Printing"
                        
                ]},
                {"title":"TOOLS",
                    "items":[
                        "Illustrator",
                        "Photoshop"
                ]},
            ]}
            projKey={projKey}
            h2margBot={""} // 2.2em default , type Xem
        ></ProjectHeader>


        {/* PROJECT CONTENT */}

        {/* <ProjectSection
            left={"SectionTitle"} leftType=""
            right={<>
                <p></p>
            </>} 
        ></ProjectSection> */}

        {/* <Divider /> */}
        {/* <img src={i_xx} style={{mixBlendMode:""}}/> */}


        <ProjectSection
            left={"T-Shirts"} leftType=""
            right={<>
                <p>
                    For Issue 11 we screen printed our own merch so that we could add sleeve designs and print on a larger area on the back.

                    
                </p>
                <img src={i_iss11} style={{maxHeight:"90vh", width:"auto", rotate:"12deg"}} className='' />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5 className='centerText'>
                    Issue X Shirt + Bucket Hat

                    
                </h5>

                <img src={i_issXmerch} />
                <img src={i_issXmerch2} />
                         <br></br>           
                         <br></br>           
                         <br></br>           
                         <br></br>           
            </>} 
        ></ProjectSection>

        <ProjectSection
            left={"Stickers"} leftType=""
            right={<>
                <p>
                    ... and also a patch!
                </p>
                <img src={i_stickers} style={{maxHeight:"80vh", width:"auto"}} className='' />
                <br></br>
                <br></br>
                <br></br>
            </>} 
        ></ProjectSection>
        <ProjectSection
            left={"Issue 9"} leftType=""
            right={<>
                <p>
                    Tote bag and sweatshirt
                </p>
                <div className='imgRow3'>
                    <img src={i_tote}  />
                    <img src={i_sweatshirt1}  />
                    <img src={i_sweatshirt2}  />

                </div>
                
            </>} 
        ></ProjectSection>
        <Divider />
        <ProjectSection
            left={"More Infinite"} leftType=""
            right={<>
                <p className='centerText w80' style={{margin:"0 auto"}}>
                    I was the Visual Design Director for Infinite Magazine for 3 years. Check out all the non-merch stuff I did here:
                    <br></br>
                    <br></br>
                    <button onClick={() => {redirectDelay("/infinite")}} 
                        >
                        INFINITEEEEEE
                    </button>
                </p>
                
            </>} 
        ></ProjectSection>
        



    </div> //* END PROJECT CONTENT *//////////////////////////
  );
}

export default Cont_InfiniteMerch;
