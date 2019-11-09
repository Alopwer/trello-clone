import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../../../../actions/index';
import Times from '../../../svg/Times';
import './Item.css';

const AddItem = (props) => {
    const [addItem, setAddItem] = useState(true)
    const [value, setValue] = useState('')
    const inputEl = useRef('')

    const createItem = () => {
        props.addItemToList({
            title: value,
            checklistId: props.checklist.id,
            cardId: props.card.cardId,
            listId: props.list.listId,
            boardId: props.list.boardId
        })
        setAddItem(true)
        setValue('')
    }

    const addBtn = (
        <button className='add__item-btn' onClick={() => setAddItem(false)}>
            Add an item
        </button>
    )

    const addItemView = (
        <div className='add__item-view'>
            <input 
                ref={inputEl}
                value={value}
                placeholder='Add an item'
                className='add__item-input' 
                autoFocus 
                onChange={() => setValue(inputEl.current.value)} 
                onBlur={createItem}
            />
            <div>
                <button className='add__item-add-btn' onClick={createItem}>
                    Add
                </button>
                <div onClick={createItem}>
                    <Times width='14' className='add__item-times' />
                </div>
            </div>
        </div>
    )

    return (
        <div className='add__item'>
            { addItem ? addBtn : addItemView }
        </div>   
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToList : (value) => dispatch(addItemToList(value))
    }
}

export default connect(null, mapDispatchToProps)(AddItem);