import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeListName } from '../../actions/index';
import Cards from '../Cards';
import './List.css';

const List = ({ list, lists, changeListName }) => {
    const { listId, boardId, title } = list

    const [value, setValue] = useState(title)
    const currentList = lists.find(list => list.listId === listId)
    
    return (
        <div className='list'>
            <input 
                className='list-title'
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value)
                    changeListName({
                        title: e.currentTarget.value, 
                        boardId: boardId,
                        listId: currentList.listId
                    })
                }}
                maxLength='22'
            />
            <div className='cards-wrapper'>
                <Cards listId={listId} currentList={currentList}/>
            </div>
        </div>
    )
}

const mapStateToProps = ({ currentBoard: { lists } }) => {
    return { lists }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListName: (value) => dispatch(changeListName(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);