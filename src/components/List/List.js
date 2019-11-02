import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeListName } from '../../actions/index';
import './List.css';
import Cards from '../Cards';

const List = (props) => {
    const { lists, changeListName } = props
    const [value, setValue] = useState(props.children)
    return (
        <div className='list'>
            <input 
                className='list-title'
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value)
                    changeListName(
                        e.currentTarget.value, 
                        lists.find(list => list.listId === props.id).listId, 
                        props.boardId
                    )
                }}
            />
            <div className='cards-wrapper'>
                <Cards cards={props.cards}/>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentBoard: { lists } }) => {
    return { lists }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListName: (listName, listId, boardId) => dispatch(changeListName(listName, listId, boardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);