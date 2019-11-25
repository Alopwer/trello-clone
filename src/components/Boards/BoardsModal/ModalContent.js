import React, { useRef, useState } from 'react';
import Times from '../../svg/Times';
import { connect } from 'react-redux';
import { addBoard } from '../../../actions/index';

const ModalContent = ({ lastId, closeModal, color, addBoard, items }) => {
    const inputEl = useRef('')
    const [input, setInput] = useState('')
    
    const id = lastId ? lastId++ : 0
    
    const createBoard = () => {
        addBoard({
            title: input,
            boardId: id,
            cover: color
        })
        closeModal()
    }

    return (
        <div className='modal__content'
            onKeyPress={(e) => {
                if (e.which === 13) {
                    createBoard()
                }
            }}
        >
            <div className='modal__content-main'>
                <div style={{background: color}}>
                    <input 
                        autoFocus
                        value={input} 
                        ref={inputEl} 
                        className='modal-input' 
                        type='text' 
                        placeholder='Add board title'
                        maxLength='18'
                        onChange={() => setInput(inputEl.current.value)}
                    />
                    <div onClick={closeModal}>
                        <Times width='10' className='closeBtn' />
                    </div>
                </div>
                <ul className='modal__grid'>
                    { items }
                </ul>
            </div>
            <button 
                className='modal-button' 
                disabled={!input}
                onClick={createBoard}
            >
                <p>Create Board</p>
            </button>
        </div>
    )
}

const mapStateToProps = ({ boards }) => {
    return { lastId: boards.length }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBoard: (board) => dispatch(addBoard(board))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);