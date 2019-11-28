import React, { useRef, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions/index';
import Times from '../svg/Times';
import './AddNewItem.css';

const AddNewItem = ({ currentParent, addList, addCard, toggleInput, setInputOpened, match, listId }) => {
    const inputEl = useRef('')
    const [parent, setParent] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        if (currentParent === 'cards') {
            setParent('cards-')
            setName('Card')
        } else {
            setParent('')
            setName('List')
        }
    }, [currentParent])

    const inputComplete = () => {
        const title = inputEl.current.value || 'Default title'
        const id = '_' + Math.random().toString(36).substr(2, 9);

        if (!parent) {
            addList({
                title,
                boardId : match.params.id, 
                listId : id
            })
        } else {
            addCard({
                title,
                listId,
                cardId : id
            })
        }
        toggleInput()
    }

    return (
        <div className={`${parent}input-container`} onKeyPress={(e) => e.which === 13 && inputComplete()}>
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

export default withRouter(connect(null, mapDispatchToProps)(AddNewItem));