import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { updateCardDescr } from '../../../actions';

const Description = ({ value, updateDescr, list, card }) => {
    const textarea = useRef('')
    const onTextareaChange = (text) => {
        updateDescr({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
            text
        })
    }

    return (
        <div className='modal-section'>
            <h4 className='modal-section-title'>Description</h4>
            <textarea 
                ref={textarea}
                className='modal-description' 
                value={value}
                placeholder='Add a description...' 
                onChange={() => onTextareaChange(textarea.current.value)}
            >
            </textarea>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateDescr : (value) => dispatch(updateCardDescr(value))
    }
}

export default connect(null, mapDispatchToProps)(Description);