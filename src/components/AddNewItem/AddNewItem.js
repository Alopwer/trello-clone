import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions/index';
import Times from '../svg/Times';
import './AddNewItem.css';

const AddNewItem = ({ currentParent, addList, addCard, toggleInput, setInputOpened }) => {
    const inputEl = useRef('')
    const [parent, setParent] = useState(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        if (currentParent.hasOwnProperty('cards')) {
            setParent('cards-')
            setName('Card')
        } else {
            setParent('')
            setName('List')
        }
    }, [])

    const inputComplete = () => {
        const title = inputEl.current.value || 'Default title'
        const { boardId } = currentParent
        if (!parent) {
            addList({
                title,
                boardId, 
                newListId: currentParent.lists.length
            })
        } else {
            addCard({
                title,
                listId: currentParent.listId, 
                boardId,
                newCardId: currentParent.cards.length
            })
        }
        toggleInput()
    }

    return (
        <div className={`${parent}input-container`}
            onKeyPress={(e) => {
                if (e.which === 13) {
                    inputComplete()
                }
            }}
        >
            <input 
                type='text' 
                placeholder={`Enter ${name} title...`}
                className={`${parent}input`}
                autoFocus
                ref={inputEl}
                maxLength='24'
            />
            <div>
                <button
                    onClick={inputComplete}
                    className='input-btn'
                >
                    Add {name}
                </button>
                <div onClick={() => setInputOpened(false)}>
                    <Times className='input-times' width='12' />
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList : (value) => dispatch(addList(value)),
        addCard : (value) => dispatch(addCard(value))
    }
}

export default connect(null, mapDispatchToProps)(AddNewItem);