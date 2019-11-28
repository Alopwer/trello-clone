import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const CreateBoard = () => {
    const [modalOpened, setModalOpened] = useState(false)

    const closeModal = () => {
        setModalOpened(false);
    }

    return (
        <div className='board__cell'>
            <div className='board-fade'>
                <div className='board__add' onClick={() => setModalOpened(true)}>
                    <p>Create new board</p>
                    <span>+</span>
                </div>
                <ModalComponent 
                    modalOpened={modalOpened}
                    closeModal={closeModal}
                />
            </div>
        </div>
    )
}

export default CreateBoard;