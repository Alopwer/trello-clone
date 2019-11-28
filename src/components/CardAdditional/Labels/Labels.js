import React, { useState, useContext } from 'react';
import { connect } from 'react-redux';
import LabelCreate from './LabelsCreate';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const Labels = ({ labels }) => {
    const { card } = useContext(ListContext)
    const [create, setCreate] = useState(false)

    const labelItems = Object.values(labels).map(label => label.cardId === card.cardId && (
        <li key={label.labelId} style={{ background: label.color }}>
            <span>{ label.title }</span>
        </li>
    ))

    return labelItems.length !== 0 && (
        <div className='labels-section'>
            <h5 className='labels-section-title'>Labels</h5>
            <div className='labels-items'>
                <ul className='labels-items-list'>
                    { labelItems }
                </ul>
                <div className='labels-add-btn'>
                    <button className='lbl-btn' onClick={() => setCreate(!create)}>+</button>
                    <div className='labels-create-block'>
                        { create && <LabelCreate onClose={setCreate} /> }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ labels : { byId } }) => ({
    labels : byId
})

export default connect(mapStateToProps)(Labels);