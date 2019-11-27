import React, { useRef, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { addChecklist } from '../../../actions';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import Times from '../../svg/Times';
import '../CardAdditional.css';

const ChecklistCreate = ({ onClose, addChecklist }) => {
    const { card } = useContext(ListContext)
    const inputEl = useRef('Checklist')
    const [inputValue, setInputValue] = useState('')
    const checklistId = '_' + Math.random().toString(36).substr(2, 9)

    const createChecklist = () => {
        if (inputValue) addChecklist({
            title: inputValue,
            cardId : card.cardId,
            checklistId 
        })
        onClose(false)
    }

    return (
        <div className='card__addit' 
            onKeyPress={(e) => e.which === 13 && createChecklist()}
        >
            <div className='card__addit-item'>
                <h5 className='card__addit-title'>Add Checklist</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='card__addit-content'>
                <span htmlFor='title'>Title</span>
                <input
                    ref={inputEl}
                    value={inputValue}
                    className='card__addit-input' 
                    type='text' 
                    autoFocus 
                    onChange={(e) => setInputValue(e.currentTarget.value)}
                />
                <button className='card__addit-btn' onClick={createChecklist}>
                    Add
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addChecklist : (value) => dispatch(addChecklist(value))
    }
}

export default connect(null, mapDispatchToProps)(ChecklistCreate);