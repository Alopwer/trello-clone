import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addChecklist } from '../../../actions';

import Times from '../../svg/Times';
import '../CardAdditional.css';

const ChecklistCreate = ({ onClose, addChecklist, boardId, listId, card }) => {
    const inputEl = useRef('Checklist')

    return (
        <div className='card__addit'>
            <div>
                <h5 className='card_addit-title'>Add Checklist</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='card__addit-content'>
                <span htmlFor='title'>Title</span>
                <input
                    ref={inputEl}
                    value={inputEl.current.value}
                    className='card__addit-input' 
                    type='text' 
                    autoFocus 
                    onChange={(e) => console.log(e.currentTarget.value)}
                />
                <button 
                    className='card__addit-btn' 
                    onClick={() => {
                        addChecklist({
                            title: inputEl.current.value,
                            boardId,
                            listId,
                            cardId : card.cardId,
                            checklistId: card.checklists.length
                        })
                        onClose(false)
                    }}
                >
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