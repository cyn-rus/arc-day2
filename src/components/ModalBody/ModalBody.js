import React from "react";

const ModalBody = ({nama, tanggal, topik, foto}) => {
  return (
      <div className="isiModal">
        <h1>{nama}</h1>
        <h2>{tanggal}</h2>
        <h3>{topik}</h3>
        <img src={foto} className="foto" />
      </div>
  )
};

export default ModalBody;