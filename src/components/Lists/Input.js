import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { addList } from '../../actions/index';
import './Lists.css';
import Times from '../svg/Times';

const Input = ({ currentBoard, addList, toggleInput, setInputOpened }) => {
    const inputEl = useRef('')
    return (
        <div className='input-container'>
            <input 
                type='text' 
                placeholder='Enter list title...' 
                className='input' 
                autoFocus
                ref={inputEl}
            />
            <div>
                <button 
                    onClick={() =>  {
                        addList(inputEl.current.value, currentBoard.id)
                        toggleInput()
                    }}
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
        addList : (title, id) => dispatch(addList(title, id))
    }
}

export default connect(null, mapDispatchToProps)(Input);