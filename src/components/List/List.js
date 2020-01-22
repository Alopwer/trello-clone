import React, { useState } from 'react';
import { connect } from 'react-redux';
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
            boardId,
            listId
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
                            listId
                        })
                    }}
                    maxLength='22'
                />
                <div className='list-times' onClick={onDeleteList}>
                    <Times width={11}/>
                </div>
            </div>
            <div className='cards-wrapper'>
                <Cards listId={list.listId} />
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

export default connect(null, mapDispatchToProps)(List);