
import { useEffect } from 'react';

function ProjectSection({left,leftType,right,divider}) {

  return (
    <>
    
        <div className="splitGrid">


            <div className='splitDiv leftSplit'>
                <h3 className={leftType}> 
                    {left} 
                </h3>
            </div>

            <div className='splitDiv rightSplit'>
                {right}
            </div>


        </div>

        {divider ? (
            <>
                <div className="divider"></div>
            </>
        ):(<></>)}

    </>
  );
}

export default ProjectSection;
