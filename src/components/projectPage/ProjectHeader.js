
import MetaList from './MetaList';

function ProjectHeader({title, subtitle, thumbSrc, metaLists}) {

  return (
    <>

    <div className="splitGrid projectHeaderDiv">
        <div className='splitDivIndent splitDiv leftSplit'>

            <h1>{title}</h1>
            <h2>{subtitle}</h2>



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


        <div className='splitDiv rightSplit'>
            <img src={thumbSrc} style={{"width":"100%","border-radius":"2%"}}/>
        </div>

    </div>

    <div className="divider dividerTop"></div>
    <div className="divider"></div>
    <div className="divider dividerBottom"></div>
    
    </>
  );
}

export default ProjectHeader;
