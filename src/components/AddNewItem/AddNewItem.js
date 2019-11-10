import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions/index';
import './AddNewItem.css';
import Times from '../svg/Times';

const AddNewItem = ({ currentParent, addList, addCard, toggleInput, setInputOpened, parent }) => {
    const inputEl = useRef('')
    let className = parent === 'list' ? '' : 'cards-'

    const inputComplete = () => {
        if (currentParent.hasOwnProperty('boardId') && currentParent.hasOwnProperty('listId')) {
            addCard({
                title: inputEl.current.value || 'Default title',
                listId: currentParent.listId, 
                boardId: currentParent.boardId,
                newCardId: currentParent.cards.length
            })
        } else {
            addList({
                title: inputEl.current.value || 'Default title',
                boardId: currentParent.boardId, 
                newListId: currentParent.lists.length
            })
        }
        toggleInput()
    }

    return (
        <div className={`${className}input-container`}
            onKeyPress={(e) => {
                if (e.which === 13) {
                    inputComplete()
                }
            }}
        >
            <input 
                type='text' 
                placeholder={`Enter ${parent} title...`}
                className={`${className}input`}
                autoFocus
                ref={inputEl}
                maxLength='24'
            />
            <div>
                <button
                    onClick={inputComplete}
                    className='input-btn'
                >
                    Add {parent[0].toUpperCase() + parent.slice(1)}
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