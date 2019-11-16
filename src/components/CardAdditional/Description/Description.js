import React, { useRef, useContext } from 'react';
import { connect } from 'react-redux';
import { updateCardDescr } from '../../../actions';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const Description = ({ updateDescr }) => {
    const { list, card } = useContext(ListContext)

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
                value={card.descr}
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