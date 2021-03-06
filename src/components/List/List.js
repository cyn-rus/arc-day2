import React from "react";
import './List.css';

const List = ({nama}) => {
  return(
    <div className="nama">
      <span>
        {nama}
      </span>
    </div>
  ) 
}

export default List;