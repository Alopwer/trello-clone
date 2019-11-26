import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import AddNewItem from '../AddNewItem';
import './Cards.css';

const Cards = ({ cards, listId }) => {
    const [inputOpened, setInputOpened] = useState(false)

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = cards &&
        Object.values(cards).map(card => card.listId === listId &&
            <div key={card.cardId}>
                <Card card={card} />
            </div>
        )
    
    const addCardItem = inputOpened ? 
        <AddNewItem
            currentParent={'cards'}
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
            listId={listId}
        /> 
            :  
        <button className='cards-btn' onClick={toggleInput}>
            <span>+</span> Add another card
        </button>

    return (
        <div className='cards'>
            { items }
            { addCardItem }
        </div>
    )
}

const mapStateToProps = ({ cards : { byId } }) => ({
    cards : byId
})

export default connect(mapStateToProps)(Cards);