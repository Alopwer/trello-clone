import React, { useState } from 'react';
import './Cards.css';
import Card from '../Card'
import AddNewItem from '../AddNewItem'

const Cards = ({ cards, currentList }) => {
    const [inputOpened, setInputOpened] = useState(false)

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = cards ? 
        cards.map((card, i) => 
            <Card title={card.title} className='card-item' key={i}>
            </Card>
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