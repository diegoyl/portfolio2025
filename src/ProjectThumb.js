import './App.css';
import './Projects.css';


function ProjectThumb({thumbSrc, title, subtitle}) {

  return (
    <div className="thumbContainer"> 


        {/* <div className='blueOverlay bo1'>
        </div>
        <div className='blueOverlay bo2'>
        </div>
        <div className='blueOverlay bo3'>
        </div> */}

        <img src={thumbSrc} />

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
  );
}

export default ProjectThumb;
