import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleCheckStatus, deleteItem } from '../../../../actions';
import Times from '../../../svg/Times';

const Item = ({ item, cardId, list, checklistId, toggleCheckStatus, deleteItem }) => {
    const checkboxEl = useRef(null)
    let itemInfo = {
        itemId : item.itemId,
        cardId,
        listId : list.listId,
        checklistId,
        boardId : list.boardId
    }

    return (
        <>
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    checked={item.done}
                    ref={checkboxEl}
                    onChange={() => toggleCheckStatus(itemInfo)}  
                />
                <span></span>
            </label>
                <p className='checkbox-item-title'>{item.title}</p>
            <div className='item-delete' onClick={() => deleteItem(itemInfo)}>
                <Times width='8' className='item-delete-times'/>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleCheckStatus: (value) => dispatch(toggleCheckStatus(value)),
    deleteItem: (value) => dispatch(deleteItem(value))
})

export default connect(null, mapDispatchToProps)(Item);