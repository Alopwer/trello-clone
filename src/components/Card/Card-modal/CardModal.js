import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import './CardModal.css';
import CardModalContent from './CardModalContent';

const CardModal = ({ history }) => {
    useEffect(() => {
        Modal.setAppElement('#root')
    }, [])

    const [modalOpened, setModalOpened] = useState(true)

    const closeModal = () => {
        setModalOpened(false);
        history.goBack()
    }

    return (
        <Modal 
            isOpen={modalOpened}
            onRequestClose={closeModal}
            className="card-modal-container"
            overlayClassName="card-overlay"
        >
            <CardModalContent closeModal={closeModal}/>
        </Modal>
    )
}

export default withRouter(CardModal);