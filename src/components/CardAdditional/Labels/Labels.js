import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const Labels = ({ labels }) => {
    const { card } = useContext(ListContext)

    const labelItems = Object.values(labels).map(label => !label.selected && label.cardId === card.cardId && (
        <li key={label.labelId} style={{ background: label.color }}>
            <span>{ label.title }</span>
        </li>
    ))

    return labelItems.length !== 0 && (
        <div className='labels-section'>
            <h5 className='modal-section-title'>Labels</h5>
            <div className='labels-items'>
                <ul className='labels-items-list'>
                    { labelItems }
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = ({ labels : { byId } }) => ({
    labels : byId
})

export default connect(mapStateToProps)(Labels);