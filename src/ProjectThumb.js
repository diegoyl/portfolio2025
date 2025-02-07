import './App.css';
import './Projects.css';
import React, {useState, useEffect} from 'react';

import thumb from './img/thumb.jpg';


function ProjectThumb({name}) {

  return (
    <div className=" thumbContainer"> 
        <img src={thumb}/>
        <h1>{name}</h1>
        <h2>Earth is the short project description</h2>
    </div>
  );
}

export default ProjectThumb;
