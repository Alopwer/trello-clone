import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../../../../actions/index';
import Times from '../../../svg/Times';
import './Item.css';

const AddItem = ({ addItemToList, checklist }) => {
    const inputEl = useRef('')
    const [addItem, setAddItem] = useState(false)
    const [value, setValue] = useState('')
    const checklistItemId = '_' + Math.random().toString(36).substr(2, 9);

    useEffect(() => {
        setValue('')
    }, [addItem])

    const createItem = () => {
        if (value) {
            addItemToList({
                title: value,
                checklistId: checklist.checklistId,
                checklistItemId
            })
        }
        setAddItem(false)
    }

    const addBtn = (
        <button className='add__item-btn' onClick={() => setAddItem(true)}>
            Add an item
        </button>
    )

    const itemView = (
        <div className='add__item-view' onKeyPress={(e) => e.which === 13 && createItem()}>
            <input 
                ref={inputEl}
                value={value}
                placeholder='Add an item'
                className='add__item-input' 
                autoFocus 
                onChange={() => setValue(inputEl.current.value)}
                onBlur={() => setAddItem(false)}
            />
            <div>
                <button className='add__item-add-btn' onMouseDown={createItem}>
                    Add
                </button>
                <div onMouseDown={() => setAddItem(false)}>
                    <Times width={11} className='add__item-times' />
                </div>
            </div>
        </div>
    )

    return (
        <div className='add__item'>
            { addItem ? itemView : addBtn }
        </div>   
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToList : (value) => dispatch(addItemToList(value))
    }
}

export default connect(null, mapDispatchToProps)(AddItem);