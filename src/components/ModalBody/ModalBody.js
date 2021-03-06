import React from "react";
import "./ModalBody.css"

const ModalBody = ({nama, tanggal, topik, foto}) => {
  return (
      <div className="isiModal">
        <div className="NamaFakta">
          <h1>{nama}</h1>
          <p1>Fakta Unik: {topik}</p1>
        </div>
        <div className="fotoKeterangan">
          <img src={foto} className="foto" />
          <p2>Tanggal Wawancara: {tanggal}</p2>
        </div>
      </div>
  )
};

export default ModalBody;