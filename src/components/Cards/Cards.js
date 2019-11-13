import React, { useState } from 'react';
import Card from '../Card'
import AddNewItem from '../AddNewItem';
import './Cards.css';

const Cards = ({ cards, currentList }) => {
    const [inputOpened, setInputOpened] = useState(false)

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

export default Cards;