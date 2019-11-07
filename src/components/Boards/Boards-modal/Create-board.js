import React, { useState, useRef, useContext } from 'react';
import { connect } from 'react-redux';

import '../Boards.css';
import Modal from 'react-modal';
import ModalContent from './Modal-content';
import { setCurrentColor } from '../../../actions';
import { BackgroundContext } from '../../../context/backgrounds-context';
import { InputContext } from '../../../context/input-content';
Modal.setAppElement('#root')

const CreateBoard = ({ currentColor, setCurrentColor }) => {
    const [modalOpened, setModalOpened] = useState(false)
    const [input, setInput] = useState('')

    const openModal = () => {
        setModalOpened(true);
    }

    const closeModal = () => {
        setModalOpened(false);
        setInput('')
    }

    return (
        <InputContext.Provider value={input}>
            <div className='boards__item'>
                <div className='boards-fade'>
                    <div className='boards__add' onClick={openModal}>
                        <p>Create new board</p>
                        <span>+</span>
                    </div>
                    <ModalComponent 
                        modalOpened={modalOpened}
                        closeModal={closeModal}
                        currentColor={currentColor}
                        setCurrentColor={setCurrentColor}
                        setInput={setInput}
                    />
                </div>
            </div>
        </InputContext.Provider>
    )
}

const ModalComponent = ({ modalOpened, closeModal, currentColor, setCurrentColor, setInput }) => {
    const backgrounds = useContext(BackgroundContext);

    const inputEl = useRef('')
    const inputChange = () => {
        setInput(inputEl.current.value)
    }

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
                inputEl={inputEl}
                inputChange={inputChange}
                closeModal={closeModal}
                currentColor={currentColor}
            >
                { listItems }
            </ModalContent>
        </Modal>
    )
}

const mapStateToProps = ({ currentColor }) => {
    return { currentColor }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentColor: (color) => dispatch(setCurrentColor(color))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoard);