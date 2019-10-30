import React, { useState, useRef, useContext } from 'react';
import { connect } from 'react-redux';

import '../Boards.css';
import Modal from 'react-modal';
import ModalView from './Modal-view';
import { setCurrentColor } from '../../../actions';
import { BackgroundContext } from '../../../context/backgrounds-context';

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
                    input={input}
                    setInput={setInput}
                />
            </div>
        </div>
    )
}

const ModalComponent = ({ modalOpened, closeModal, currentColor, setCurrentColor, input, setInput }) => {
    const inputEl = useRef(null);
    const btnEl = useRef(null);
    const backgrounds = useContext(BackgroundContext);

    const inputChange = () => {
        setInput(inputEl.current.value)
        onButtonActive();
    }

    const onButtonActive = () => {
        const btn = btnEl.current.style;
        if (inputEl.current.value) {
            btn.backgroundColor = '#5aac44'
            btn.color = 'white'
        } else {
            btn.backgroundColor = 'white'
            btn.color = '#a5adba'
        }
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
            contentLabel="Create new Board"
            className="modal-container"
            overlayClassName="overlay"
        >   
            <ModalView 
                input={input}
                inputEl={inputEl}
                inputChange={inputChange}
                closeModal={closeModal}
                listItems={listItems}
                btnEl={btnEl}
                currentColor={currentColor}
            />
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