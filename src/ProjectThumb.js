import './App.css';
import './Work.css';

import React, {useState} from 'react';

function ProjectThumb({thumbSrc, title, subtitle}) {
  
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className="thumbContainer"> 


        {/* <div className='blueOverlay bo1'>
        </div>
        <div className='blueOverlay bo2'>
        </div>
        <div className='blueOverlay bo3'>
        </div> */}

        {/* <img src={thumbSrc} /> */}


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
    </div>
  );
}

export default ProjectThumb;
