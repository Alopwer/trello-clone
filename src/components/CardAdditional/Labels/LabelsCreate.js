import React, { useRef, useState, useContext } from 'react';
import { connect } from 'react-redux';
import { createNewLabel } from '../../../actions';
import Times from '../../svg/Times';
import Edit from '../../svg/Edit';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const LabelsCreate = ({ onClose, createNewLabel }) => {
    const { list, card } = useContext(ListContext)
    const color = 'blue'
    
    return (
        <div className='card__addit'>
            <div className='card__addit-item'>
                <h5 className='card__addit-title'>Labels</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='labels-container'>
                <input 
                    className='card__addit-input labels-input'
                    placeholder='Search labels...'    
                />
                <div className='labels-content'>
                    <p className='labels-title'>LABELS</p>
                    <ul className='labels__list'>
                        {
                            card.labels.map(label => (
                                <li className='labels__list-item'>
                                    <div className='outer-div' style={{background: label.color}}>
                                        <span className='span-fade'>
                                        <span className='labels__list-item-color'>{label.name}</span>
                                        </span>
                                    </div>
                                    <div className='labels__list-item-btn'>
                                        <Edit width='14'/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <button 
                    className='labels-create-btn' 
                    onClick={() => createNewLabel({
                        boardId: list.boardId,
                        listId: list.listId,
                        cardId: card.cardId,
                        color,
                        name: 'new label',
                        labelId : 1
                    })}
                >
                    Create new label
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    createNewLabel: (value) => dispatch(createNewLabel(value))
})

export default connect(null, mapDispatchToProps)(LabelsCreate);