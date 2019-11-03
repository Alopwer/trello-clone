import React, { useContext } from 'react';
import Times from '../../svg/Times';
import '../Boards.css';
import { connect } from 'react-redux';
import { addBoard } from '../../../actions/index';
import { IdContext } from '../../../context/id-context';
import { InputContext } from '../../../context/input-content';

const ModalContent = ({ inputChange, inputEl, closeModal, currentColor, addBoard, ...props }) => {
    const input = useContext(InputContext)
    const id = useContext(IdContext)
    
    const createBoard = () => {
        addBoard({
            title: input,
            id,
            cover: currentColor
        })
        closeModal()
    }

    return (
        <div className='modal__content'>
            <div className='modal__content-main'>
                <div style={{background: currentColor}}>
                    <input 
                        autoFocus
                        value={input} 
                        ref={inputEl} 
                        className='modal-input' 
                        type='text' 
                        placeholder='Add board title' 
                        onChange={inputChange}
                    />
                    <Times closeModal={closeModal}/>
                </div>
                <ul className='modal__grid'>
                    { props.children }
                </ul>
            </div>
            <button 
                className='modal-button' 
                disabled={!input}
                onClick={createBoard}
            >
                <div>Create Board</div>
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBoard: (board) => dispatch(addBoard(board))
    }
}

export default connect(null, mapDispatchToProps)(ModalContent);