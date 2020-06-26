import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import Times from '../../svg/Times';
import { createBoardThunk } from '../../../actions/thunkCreators'

const ModalContent = ({ closeModal, color, bgItems, createBoardThunk, uid }) => {
    const inputEl = useRef('')
    const [input, setInput] = useState('')
    
    const boardId = '_' + Math.random().toString(36).substr(2, 9);
    
    const createBoard = () => {
        createBoardThunk({
            title: input,
            boardId,
            cover: color,
            createdAt: new Date(),
            uid
        })
        closeModal()
    }

    return (
        <div className='modal__content' onKeyPress={(e) => { if (e.which === 13) createBoard()}}>
            <div className='modal__content-main'>
                <div style={{ background: color }}>
                    <input 
                        autoFocus
                        value={input} 
                        ref={inputEl} 
                        className='modal-input' 
                        type='text' 
                        placeholder='Add board title'
                        maxLength='17'
                        onChange={() => setInput(inputEl.current.value)}
                    />
                    <div onClick={closeModal}>
                        <Times width={10} className='closeBtn' />
                    </div>
                </div>
                <ul className='modal__grid'>
                    { bgItems }
                </ul>
            </div>
            <button 
                className='modal-button' 
                disabled={!input}
                onClick={createBoard}
            >
                <span>Create Board</span>
            </button>
        </div>
    )
}

const mapStateToProps = ({ firebase : { auth } }) => ({
    uid : auth.uid
})

const mapDispatchToProps = (dispatch) => ({
    createBoardThunk: (board) => dispatch(createBoardThunk(board)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalContent);