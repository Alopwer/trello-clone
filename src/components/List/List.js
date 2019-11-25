import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteList } from '../../actions';
import { changeListName } from '../../actions/index';
import Cards from '../Cards';
import './List.css';
import Times from '../svg/Times';

const List = ({ list, changeListName, deleteList }) => {
    const { listId, boardId, title } = list

    const [value, setValue] = useState(title)

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
                            listId
                        })
                    }}
                    maxLength='22'
                />
                <div className='list-times' onClick={onDeleteList}>
                    <Times width='10'/>
                </div>
            </div>
            <div className='cards-wrapper'>
                <Cards list={list} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeListName: (value) => dispatch(changeListName(value)),
        deleteList: (value) => dispatch(deleteList(value))
    }
}

export default withRouter(connect(null, mapDispatchToProps)(List));