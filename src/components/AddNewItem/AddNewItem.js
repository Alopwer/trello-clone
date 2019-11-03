import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions/index';
// import '../Lists/Lists.css';
import Times from '../svg/Times';

const AddNewItem = ({ currentParent, addList, addCard, toggleInput, setInputOpened }) => {
    const inputEl = useRef('')
    const inputComplete = () => {
        if (currentParent.hasOwnProperty('boardId')) {
            addCard({
                title: inputEl.current.value,
                list: currentParent, 
                newCardId: currentParent.cards.length
            })
        } else {
            addList({
                title: inputEl.current.value,
                boardId: currentParent.id, 
                newListId: currentParent.lists.length
            })
        }
        toggleInput()
    }

    return (
        <div className='input-container' 
            onKeyPress={(e) => {
                if (e.which === 13) {
                    inputComplete()
                }
            }}
        >
            <input 
                type='text' 
                placeholder='Enter list title...' 
                className='input' 
                autoFocus
                ref={inputEl}
            />
            <div>
                <button
                    onClick={inputComplete}
                    className='input-btn'
                >
                    Add List
                </button>
                <Times className='input-times' setInputOpened={setInputOpened}/>
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