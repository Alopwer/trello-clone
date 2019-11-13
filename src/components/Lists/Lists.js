import React, { useState } from 'react';
import './Lists.css';
import { connect } from 'react-redux';
import List from '../List';
import AddNewItem from '../AddNewItem';

const Lists = ({ lists, currentBoard }) => {
    const [inputOpened, setInputOpened] = useState(false)

    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }

    const items = lists ? 
        lists.map((list, i) => 
            <div className='lists-item' key={i}>
                <List list={list} />
            </div>
        ) 
            : 
        false  

    const addListItem = inputOpened ? 
        <AddNewItem 
            currentParent={currentBoard} 
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='lists-btn' onClick={toggleInput}>
            <span>+</span> Add another list
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