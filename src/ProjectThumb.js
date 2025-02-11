import './App.css';
import './Projects.css';


function ProjectThumb({thumbSrc, title, subtitle}) {

  return (
    <div className="thumbContainer"> 
        <img src={thumbSrc}/>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
  );
}

export default ProjectThumb;
