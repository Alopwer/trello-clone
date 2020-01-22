import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import { backgrounds } from '../../../data/backgrounds';

Modal.setAppElement('#root')

const ModalComponent = ({ modalOpened, closeModal }) => {
    const [color, setColor] = useState('rgb(0, 121, 191)')
    const bgItems = backgrounds.map((bg, i) => (
        <li key={i} className='modal__grid-elem' >
            <button style={{ backgroundColor: bg }} onClick={() => setColor(bg)}>
                <div></div>
            </button>
        </li>
    ))

    return (
        <Modal 
            isOpen={modalOpened}
            onRequestClose={closeModal}
            className="modal-container"
            overlayClassName="overlay"
        > 
            <ModalContent closeModal={closeModal} color={color} bgItems={bgItems} />
        </Modal>
    )
}

export default ModalComponent;