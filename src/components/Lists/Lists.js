import React from 'react';
import './Lists.css';
import { connect } from 'react-redux';
import { addList } from '../../actions';
import List from '../List'

const Lists = ({ lists, addList, currentBoard }) => {
    const items = lists ? lists.map((list, i) => 
        (
            <div className='lists-item'>
                <List
                    key={i}
                    cards={list.cards}
                >
                    {list.title}
                </List>
            </div>
        )) : false  

    return (
        <div className='lists__wrapper'>
            {items}
            <button className='lists-btn' onClick={() => addList('here must be a title for a new list', currentBoard.id)}>
                <span>+</span> Add another title list
            </button>
        </div>
    )
}

const mapStateToProps = ({ currentBoard, currentBoard : { lists } }) => {
    return { currentBoard, lists }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addList : (title, id) => dispatch(addList(title, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);