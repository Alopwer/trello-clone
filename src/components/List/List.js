import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeListName } from '../../actions/index';
import './List.css';
import Cards from '../Cards';

const List = (props) => {
    const { lists, changeListName } = props
    const [value, setValue] = useState(props.children)
    const currentList = lists.find(list => list.listId === props.id)
    return (
        <div className='list'>
            <input 
                className='list-title'
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value)
                    changeListName({
                        title: e.currentTarget.value, 
                        boardId: props.boardId,
                        listId: currentList.listId
                    })
                }}
                maxLength='22'
            />
            <div className='cards-wrapper'>
                <Cards cards={props.cards} currentList={currentList}/>
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