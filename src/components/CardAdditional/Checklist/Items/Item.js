import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleCheckStatus, deleteItem } from '../../../../actions';
import Times from '../../../svg/Times';

const Item = ({ item, cardId, list, checklistId, toggleCheckStatus, deleteItem }) => {
    const checkboxEl = useRef(null)
    const [done, setDone] = useState(item.done)
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
                    checked={done}
                    ref={checkboxEl}
                    onChange={() => {
                        toggleCheckStatus(itemInfo)
                        setDone(!done)
                    }}
                />
                <span>{item.title}</span>
            </label>
            <div className='item-delete' onClick={() => { 
                    deleteItem(itemInfo)
                    setDone(!done)
                }}
            >
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