function ProjectTitles({title, items}) {

    return (
      <>
          <div className="ProjectTitles">
              <p className="metaHeader">{title}</p>
  
              {items.map(function(itemName,index) {
                  return (
                      <p>itemName</p>
                  )
              })}
          </div>
      </>
    );
  }
  
  export default ProjectTitles;
  