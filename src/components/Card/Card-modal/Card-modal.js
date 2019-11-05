import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import '../Card.css';

const CardModal = (props) => {
    useEffect(() => {
        Modal.setAppElement('#root')
    })
    const [modalOpened, setModalOpened] = useState(true)

    const closeModal = () => {
        setModalOpened(false);
        props.history.goBack()
    }

    return (
        <Modal 
        isOpen={modalOpened}
        onRequestClose={closeModal}
        className="card-modal-container"
        overlayClassName="card-overlay"
        > 
            <div>
                Here must be content represented by icons, title, labels, checklist, due date,
            </div>
        </Modal>
    )
}

export default withRouter(CardModal);