import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import { backgrounds } from '../../../data/backgrounds';

Modal.setAppElement('#root')

const ModalComponent = ({ modalOpened, closeModal, setCurrentColor }) => {
    const listItems = backgrounds.map((bg, i) => 
        (
            <li key={i} className='modal__grid-elem'>
                <button style={{backgroundColor: bg}} onClick={() => setCurrentColor(bg)}>
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
            <ModalContent 
                closeModal={closeModal}
            >
                { listItems }
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent;