import React, { useState, useRef, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { addItemToList } from '../../../../actions/index';
import Times from '../../../svg/Times';
import { ListContext } from '../../../Card/Card-modal/CardModalContent';
import './Item.css';

const AddItem = ({ addItemToList, checklist }) => {
    const { list, card } = useContext(ListContext)
    const inputEl = useRef('')

    const [addItem, setAddItem] = useState(true)
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue('')
    }, [addItem])

    const createItem = () => {
        if (value) {
            addItemToList({
                title: value,
                checklistId: checklist.checklistId,
                cardId: card.cardId,
                listId: list.listId,
                boardId: list.boardId,
                itemId: checklist.items.length
            })
        }
    }

    const addBtn = (
        <button className='add__item-btn' onClick={() => setAddItem(false)}>
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
                onBlur={() => setAddItem(true)}
            />
            <div>
                <button className='add__item-add-btn' onMouseDown={createItem}>
                    Add
                </button>
                <div onMouseDown={() => setAddItem(true)}>
                    <Times width='14' className='add__item-times' />
                </div>
            </div>
        </div>
    )

    return (
        <div className='add__item'>
            { addItem ? addBtn : itemView }
        </div>   
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToList : (value) => dispatch(addItemToList(value))
    }
}

export default connect(null, mapDispatchToProps)(AddItem);