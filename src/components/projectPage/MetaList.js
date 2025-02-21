function MetaList({title, items}) {

  return (
      <div className="metaList">
          <p className="metaHeader">{title}</p>

          {items.map(function(itemName,index) {
              return (
                  <p>{itemName}</p>
              )
          })}
      </div>
  );
}

export default MetaList;
