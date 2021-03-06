import React, { useState } from "react";
import Modal from "react-modal";
import { caKru } from "./data/CaKru.json";
import { kru } from "./data/Kru.json";
import List from "./components/List/List.js";
import ModalBody from "./components/ModalBody/ModalBody.js";
import "./App.css";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedCaKru, setSelectedCakru] = useState({})
  
  const openModal = (CaKru) => {
    setModalIsOpen(true);
    setSelectedCakru(CaKru);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCakru({});
  };

  return (
    <div className="all">
    <>
      <div className="identitas">
          <p1><span>Cynthia Rusadi</span></p1>
          <p2><span>13519118</span></p2>
      </div>


      <div className="JudulCaKru"><h1>Ca-Kru</h1></div>
      {
        caKru.map((nameCaKru, index) => {
          return (
            <div 
              key={`${nameCaKru.nama}-${index}`}
              className='NamaCaKru' 
              onClick={() => openModal(nameCaKru)}
            >
              <List {...nameCaKru} />
            </div>
          )
        })
      }

      <div className="JudulKru"><h1>Kru</h1></div>
      {
        kru.map((namaKru, index) => {
          return (
            <div 
              key={`${namaKru.nama}-${index}`}
              className="NameKru"
              onClick={
                () =>openModal(namaKru)
              }
            >
              <List {...namaKru} />
            </div>
          )
        })
      }

    <Modal isOpen={modalIsOpen}>
      <button onClick={closeModal} className="button">Close</button>
      {
        selectedCaKru && <ModalBody {...selectedCaKru}/>
      }
    </Modal>

    </>
    </div>
  )
};

export default App;