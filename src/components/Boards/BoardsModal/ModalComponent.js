import React from 'react';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import { backgrounds } from '../../../data/backgrounds';
import { connect } from 'react-redux';
import { setCurrentColor } from '../../../actions';

Modal.setAppElement('#root')

const ModalComponent = ({ modalOpened, closeModal, setCurrentColor }) => {
    const listItems = backgrounds.map((bg, i) => 
        (
            <li key={i} className='modal__grid-elem'>
                <button style={{backgroundColor: bg}} onClick={() => setCurrentColor(bg)}>
                    <div></div>
                </button>
            </li>
        )
    )

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

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentColor: (color) => dispatch(setCurrentColor(color))
    }
}

export default connect(null, mapDispatchToProps)(ModalComponent);