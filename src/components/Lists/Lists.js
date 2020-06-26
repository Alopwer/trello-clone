import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from '../List';
import AddNewItem from '../AddNewItem';
import './Lists.css';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const Lists = ({ lists, match, requesting }) => {
    const [inputOpened, setInputOpened] = useState(false)
    const toggleInput = () => {
        setInputOpened(!inputOpened)
    }
    
    const listItems = lists &&
        Object.entries(lists).map(list => list[1]?.boardId === match.params.id &&
            <div className='lists-item' key={list[0]}>
                <List list={list[1]} listId={list[0]} />
            </div>
        )

    const addListItem = inputOpened ? 
        <AddNewItem 
            currentParent={'list'} 
            toggleInput={toggleInput} 
            setInputOpened={setInputOpened}
        /> 
            :  
        <button className='lists-btn' onClick={toggleInput}>
            <span>+</span> Add another list
        </button>

    return (
        <div className='lists__wrapper'>
            { !requesting && listItems }
            { addListItem }
        </div>
    )
}

const mapStateToProps = ({ firestore : { data, status } }) => ({ 
    lists : data.lists,
    requesting: status.requesting['lists?orderBy=createdAt:asc']
})

export default compose(
    withRouter,
    firestoreConnect([
        { collection: 'lists', orderBy: ['createdAt', 'asc'] }
    ]),
    connect(mapStateToProps)
)(Lists);