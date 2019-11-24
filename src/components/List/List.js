import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteList } from '../../actions';
import { changeListName } from '../../actions/index';
import Cards from '../Cards';
import './List.css';
import Times from '../svg/Times';

const List = ({ list, lists, changeListName, deleteList }) => {
    const { listId, boardId, title } = list

    const [value, setValue] = useState(title)
    const currentList = lists.find(list => list.listId === listId)

    const onDeleteList = () => {
        deleteList({
            boardId: list.boardId,
            listId: list.listId
        })
    }
    
    return (
        <div className='list'>
            <div className='list-header'>
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
                <div className='list-times' onClick={onDeleteList}>
                    <Times width='10'/>
                </div>
            </div>
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
        changeListName: (value) => dispatch(changeListName(value)),
        deleteList: (value) => dispatch(deleteList(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);