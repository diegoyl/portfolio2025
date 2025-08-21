import './App.css';
import './Work.css';

import React, {useState} from 'react';

function ProjectThumbRedirect({thumbSrc, title, subtitle, redirect}) {

  const [imgLoading, setImgLoading] = useState(true);

  return (
    <a className="thumbContainer" href={redirect} target="_blank" > 


        {/* <div className='blueOverlay bo1'>
        </div>
        <div className='blueOverlay bo2'>
        </div>
        <div className='blueOverlay bo3'>
        </div> */}

        <div className="placeholderContainer" >
            {imgLoading && <div className="placeholderThumb" />} {/* Background Placeholder */}
            
            <img src={thumbSrc} loading="lazy"
              style={{
                opacity: imgLoading ? 0 : 1, // Hide until loaded
                transition: "opacity 0.3s ease-in-out",
              }}
              onLoad={() => setImgLoading(false)}
            />
        </div>

        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </a>
  );
}

export default ProjectThumbRedirect;
