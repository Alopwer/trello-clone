import React, { useState, useContext } from 'react';
import { labelColors } from '../../../data/labelColors';
import { connect } from 'react-redux';
import { addLabel, updateLabel, deleteLabel, changeLabelStatus } from '../../../actions';
import LabelsView from './LabelsView';
import LabelItemModify from './LabelItemModify';
import Edit from '../../svg/Edit';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Labels.css';

const LabelsCreate = ({ labels, onClose, addLabel, updateLabel, deleteLabel, changeLabelStatus }) => {
    const { card } = useContext(ListContext)
    const [itemCreate, setItemCreate] = useState(false)
    const [colorValue, setColor] = useState('')
    const [label, setLabel] = useState(false)
    const [filter, setFilter] = useState('')

    const onActionLabel = () => {
        setItemCreate(false)
        setLabel(false)
        setColor('')
    }

    const onAddLabel = (colorValue, inputValue) => {
        addLabel({
            color : colorValue,
            title : inputValue,
            cardId : card.cardId,
            labelId : '_' + Math.random().toString(36).substr(2, 9)
        })
        onActionLabel()
    }

    const onDeleteLabel = (labelId) => {
        deleteLabel({
            cardId : card.cardId,
            labelId
        })        
        onActionLabel()
    }

    const onUpdateLabel = (colorValue, inputValue, labelId) => {
        updateLabel({
            color : colorValue,
            title : inputValue,
            cardId : card.cardId,
            labelId
        })
        onActionLabel()
    }

    const onChangeLabelStatus = (id) => {
        changeLabelStatus(id)
    }

    const onPrepareLabel = (label) => {
        setLabel(label)
        setColor(label.color)
        setItemCreate(true)
    }

    const items = Object.values(labels).map(label => label.title.match(filter) && (
        <li className='labels__list-item' key={label.labelId}>
            <div className='outer-div' style={{ background: label.color }} onClick={() => onChangeLabelStatus(label.labelId)}>
                <span className='span-fade'>
                    <span className='labels__list-item-color'>{ label.title }</span>
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
            onAddLabel={onAddLabel}
            onUpdateLabel={onUpdateLabel}
            onDeleteLabel={onDeleteLabel}
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

const mapStateToProps = ({ labels : { byId } }) => ({
    labels : byId
})

const mapDispatchToProps = (dispatch) => ({
    addLabel: (value) => dispatch(addLabel(value)),
    updateLabel: (value) => dispatch(updateLabel(value)),
    deleteLabel: (value) => dispatch(deleteLabel(value)),
    changeLabelStatus: (value) => dispatch(changeLabelStatus(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(LabelsCreate);