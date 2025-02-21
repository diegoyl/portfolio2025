import './App.css';
import './Projects.css';


function ProjectThumbRedirect({thumbSrc, title, subtitle, redirect}) {


  return (
    <a className="thumbContainer" href={redirect} target="_blank" > 


        {/* <div className='blueOverlay bo1'>
        </div>
        <div className='blueOverlay bo2'>
        </div>
        <div className='blueOverlay bo3'>
        </div> */}

        <img src={thumbSrc} />

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </a>
  );
}

export default ProjectThumbRedirect;
