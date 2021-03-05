import React, { useState } from "react";
import Modal from "react-modal";
import { caKru } from "./data/CaKru.json";
import { kru } from "./data/Kru.json";
import List from "./components/List/List.js";
import ModalBody from "./components/ModalBody/ModalBody.js";

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
    <>
    <div>

      <div className="JudulCaKru">Ca-Kru</div>
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

      <div className="JudulKru">Kru</div>
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

    </div>

    <Modal isOpen={modalIsOpen}>
      <button onClick={closeModal}> pencet gua </button>
      {
        selectedCaKru && <ModalBody {...selectedCaKru}/>
      }
    </Modal>

    </>
  )
};

export default App;