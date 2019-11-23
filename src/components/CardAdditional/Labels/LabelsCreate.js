import React, { useRef, useState, useContext } from 'react';
import { labelColors } from '../../../data/labelColors';
import { connect } from 'react-redux';
import { createNewLabel, modifiedLabelSave, labelDelete } from '../../../actions';
import LabelsView from './LabelsView';
import LabelItemModify from './LabelItemModify';
import Edit from '../../svg/Edit';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Labels.css';

const LabelsCreate = ({ onClose, createNewLabel, modifiedLabelSave, labelDelete }) => {
    const { list, card } = useContext(ListContext)

    const [itemCreate, setItemCreate] = useState(false)
    const [colorValue, setColor] = useState('')
    const [label, setLabel] = useState(false)
    const [filter, setFilter] = useState('')
    
    const onLabelSave = (color, name, labelId, selected = false) => {
        const ids = {
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
        }
        const label = {
            ...ids,
            color,
            name,
            selected
        }

        if (typeof labelId === 'number') {
            if (!color) {
                labelDelete({
                    ...ids,
                    labelId
                })
            } else {
                modifiedLabelSave({
                    ...label,
                    labelId
                })
            }
        } else {
            createNewLabel({
                ...label,
                labelId : card.labels.length
            })
        }

        setItemCreate(false)
        setLabel(false)
        setColor('')
    }

    const onPrepareLabel = (label) => {
        setLabel(label)
        setColor(label.color)
        setItemCreate(true)
    }

    const toggleSelectedStatus = ({ color, name, labelId, selected }) => {
        onLabelSave(color, name, labelId, !selected)
    }

    const items = card.labels.map(label => label.name.match(filter) && (
        <li className='labels__list-item' key={ label.labelId }>
            <div className='outer-div' style={{ background: label.color }} onClick={() => toggleSelectedStatus(label)}>
                <span className='span-fade'>
                    <span className='labels__list-item-color'>{ label.name }</span>
                    <span className='labels__list-item-color'>{ label.selected && '✓' }</span>
                </span>
            </div>
            <div className='labels__list-item-btn' onClick={() => onPrepareLabel(label)}>
                <Edit width='14'/>
            </div>
        </li>
    ))

    const colors = labelColors.map((color, i) => (
        <li key={i}>
            <div 
                style={{background: color}} 
                className='label-list-item'
                onClick={() => setColor(color)}
            >
                <div className='light-layer'>
                    { color === colorValue && '✓' }
                </div>
            </div>
        </li>
    ))

    return itemCreate ? 
        <LabelItemModify 
            onLabelSave={onLabelSave}
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
            setFilter={setFilter}
        />

}

const mapDispatchToProps = (dispatch) => ({
    createNewLabel: (value) => dispatch(createNewLabel(value)),
    modifiedLabelSave: (value) => dispatch(modifiedLabelSave(value)),
    labelDelete: (value) => dispatch(labelDelete(value))
})

export default connect(null, mapDispatchToProps)(LabelsCreate);