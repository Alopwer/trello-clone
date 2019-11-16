import React, { useRef, useContext } from 'react';
import { connect } from 'react-redux';
import { toggleCheckStatus, deleteItem } from '../../../../actions';
import Times from '../../../svg/Times';
import { ListContext } from '../../../Card/Card-modal/CardModalContent';

const Item = ({ item, checklistId, toggleCheckStatus, deleteItem }) => {
    const { list, card } = useContext(ListContext)
    const checkboxEl = useRef(null)

    let itemInfo = {
        boardId : list.boardId,
        listId : list.listId,
        cardId : card.cardId,
        checklistId,
        itemId : item.itemId
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