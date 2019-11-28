import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { toggleCheckStatus, deleteItem } from '../../../../actions';
import Times from '../../../svg/Times';

const Item = ({ item, toggleCheckStatus, deleteItem }) => {
    const checkboxEl = useRef(null)
    const onDeleteItem = () => {
        deleteItem({
            checklistId : item.checklistId, 
            checklistItemId : item.checklistItemId
        })
    }
    const onToggleCheckStatus = () => {
        toggleCheckStatus({
            checklistId : item.checklistId, 
            checklistItemId : item.checklistItemId
        })
    } 

    return (
        <>
            <label className="checkbox">
                <input 
                    type="checkbox" 
                    checked={item.done}
                    ref={checkboxEl}
                    onChange={onToggleCheckStatus}  
                />
                <span></span>
            </label>
                <p className='checkbox-item-title'>{item.title}</p>
            <div className='item-delete' onClick={onDeleteItem}>
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