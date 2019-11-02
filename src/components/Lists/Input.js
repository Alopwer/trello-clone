import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { addList } from '../../actions/index';
import './Lists.css';
import Times from '../svg/Times';

const Input = ({ currentBoard, addList, toggleInput, setInputOpened }) => {
    const inputEl = useRef('')
    const inputComplete = () => {
        addList(inputEl.current.value, currentBoard.id, currentBoard.lists.length)
        toggleInput()
    }

    return (
        <div className='input-container' 
            onKeyPress={(e) => {
                if (e.which === 13) {
                    inputComplete()
                }
            }}
        >
            <input 
                type='text' 
                placeholder='Enter list title...' 
                className='input' 
                autoFocus
                ref={inputEl}
            />
            <div>
                <button
                    onClick={inputComplete}
                    className='input-btn'
                >
                    Add List
                </button>
                <Times className='input-times' setInputOpened={setInputOpened}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList : (title, id, listId) => dispatch(addList(title, id, listId))
    }
}

export default connect(null, mapDispatchToProps)(Input);