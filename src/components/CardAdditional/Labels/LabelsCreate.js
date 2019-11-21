import React, { useRef, useState, useContext } from 'react';
import { labelColors } from '../../../data/labelColors';
import { connect } from 'react-redux';
import { createNewLabel } from '../../../actions';
import LabelsView from './LabelsView';
import LabelItemModify from './LabelItemModify';
import Edit from '../../svg/Edit';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Labels.css';

const LabelsCreate = ({ onClose, createNewLabel }) => {
    const { list, card } = useContext(ListContext)
    const [itemCreate, setItemCreate] = useState(false)
    const [colorValue, setColor] = useState('')
    const [label, setLabel] = useState(null)

    const onLabelCreate = (color, name) => {
        createNewLabel({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
            color,
            name,
            labelId : card.labels.length
        })
        setItemCreate(false)
        setLabel(null)
        setColor('')
    }

    // const onModifiedItemSave = () => {
    //     modifyLabel({
    //         boardId: list.boardId,
    //         listId: list.listId,
    //         cardId: card.cardId,
    //         color,
    //         name,
    //         labelId : card.labels.length
    //     })
    // }

    const onPrepareLabel = (label) => {
        setLabel(label)
        setColor(label.color)
        setItemCreate(true)
    }

    const items = card.labels.map(label => (
        <li className='labels__list-item'>
            <div className='outer-div' style={{background: label.color}}>
                <span className='span-fade'>
                <span className='labels__list-item-color'>{label.name}</span>
                </span>
            </div>
            <div className='labels__list-item-btn' onClick={() => onPrepareLabel(label)}>
                <Edit width='14'/>
            </div>
        </li>
    ))

    const colors = labelColors.map(color => (
        <li>
            <div 
                style={{background: color}} 
                className='label-list-item'
                onClick={() => setColor(color)}
            >
                <div className='light-layer'>
                    { color === colorValue ? '✓' : '' }
                </div>
            </div>
        </li>
    ))

    return itemCreate ? 
        <LabelItemModify 
            onLabelCreate={onLabelCreate}
            setItemCreate={setItemCreate}
            onClose={onClose}
            colors={colors}
            colorValue={colorValue}
            label={label}
        /> 
            : 
        <LabelsView 
            items={items}
            onClose={onClose}
            setItemCreate={setItemCreate}
            setLabel={setLabel}
            setColor={setColor}
        />

}

const mapDispatchToProps = (dispatch) => ({
    createNewLabel: (value) => dispatch(createNewLabel(value))
})

export default connect(null, mapDispatchToProps)(LabelsCreate);