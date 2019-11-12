import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleCheckStatus } from '../../../../actions';

const Item = ({ item, cardId, list, checklistId, toggleCheckStatus }) => {
    const checkboxEl = useRef(null)
    
    return (
        <label className="checkbox">
            <input 
                type="checkbox" 
                ref={checkboxEl}
                onClick={() => toggleCheckStatus({
                    itemId : item.itemId,
                    cardId,
                    listId : list.listId,
                    checklistId,
                    boardId : list.boardId
                })}
            />
            <span>{item.title}</span>
        </label>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCheckStatus: (value) => dispatch(toggleCheckStatus(value))
})

export default connect(null, mapDispatchToProps)(Item);