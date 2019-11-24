import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import AddNewItem from '../AddNewItem';
import './Cards.css';

const Cards = ({ listId, currentList, lists, deleteCard }) => {
    const [inputOpened, setInputOpened] = useState(false)
    const list = lists.find(list => listId === list.listId)
    const cards = list.cards

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = cards ? 
        cards.map((card, i) => 
            <div key={i}>
                <Card card={card} />
            </div>
        ) 
            :
        false  
    
    const addCardItem = inputOpened ? 
        <AddNewItem
            currentParent={currentList}
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='cards-btn' onClick={toggleInput}>
            <span>+</span> Add another card
        </button>

    return (
        <div className='cards'>
            {items}
            {addCardItem}
        </div>
    )
}

const mapStateToProps = ({ currentBoard: { lists } }) => {
    return { lists }
}

export default connect(mapStateToProps)(Cards);