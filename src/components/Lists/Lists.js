import React, { useState } from 'react';
import './Lists.css';
import { connect } from 'react-redux';
import List from '../List';
import Input from './Input';

const Lists = ({ lists, currentBoard }) => {
    const [inputOpened, setInputOpened] = useState(false)

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = lists ? 
        lists.map((list, i) => 
            <div className='lists-item'>
                <List
                    key={i}
                    cards={list.cards}
                >
                    {list.title}
                </List>
            </div>
        ) 
            : 
        false  

    const addListItem = inputOpened ? 
        <Input 
            currentBoard={currentBoard} 
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='lists-btn' onClick={toggleInput}>
            <span>+</span> Add another title list
        </button>

    return (
        <div className='lists__wrapper'>
            {items}
            {addListItem}
        </div>
    )
}

const mapStateToProps = ({ currentBoard, currentBoard : { lists } }) => {
    return { currentBoard, lists }
}

export default connect(mapStateToProps)(Lists);