import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentColor } from '../../../actions';
import '../Boards.css';
import ModalComponent from './ModalComponent';

const CreateBoard = ({ setCurrentColor }) => {
    const [modalOpened, setModalOpened] = useState(false)

    const closeModal = () => {
        setModalOpened(false);
    }

    return (
        <div className='boards__item'>
            <div className='boards-fade'>
                <div className='boards__add' onClick={() => setModalOpened(!modalOpened)}>
                    <p>Create new board</p>
                    <span>+</span>
                </div>
                <ModalComponent 
                    modalOpened={modalOpened}
                    closeModal={closeModal}
                    setCurrentColor={setCurrentColor}
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentColor: (color) => dispatch(setCurrentColor(color))
    }
}

export default connect(null, mapDispatchToProps)(CreateBoard);