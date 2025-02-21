
import { useEffect } from 'react';
import MetaList from './MetaList';

function ProjectHeader({title, subtitle, description, metaLists, projKey, h2margBot}) {

    useEffect(() => {
        console.log("helllo")
        // document.getElementById("headerImg").style.backgroundImage = thumbSrc
        
    },[])
  return (
    <>
    <div className="splitGrid projectHeaderDiv">
        <div className='splitDivIndent splitDiv leftSplit'>
            <div style={{height:"2.8em"}}></div>

            {title ? (
                <h1>{title}</h1>
            ) :(<></>)}

            {subtitle ? (
                <h2 style={{"margin-bottom":h2margBot}}>{subtitle}</h2>
            ) :(<></>)}

            {description ? (
                <h4>{description}</h4>
            ) :(<></>)}

            <div style={{height:"2.2em"}}></div>

            {metaLists.map(function(listData,index) {
                return ( 
                    <MetaList
                        key={index}
                        title={ listData["title"] }
                        items={ listData["items"] }
                    ></MetaList>
                )
            })}

        </div>


        <div id="" className='splitDiv rightSplit' >
            <div className={'headerImg phi-'+projKey}></div>
        </div>

    </div>

    {/* <div className="divider divider3Top"></div>
    <div className="divider divider3Middle"></div> */}
    <div className="divider dividerHeader"></div>
    
    </>
  );
}

export default ProjectHeader;
