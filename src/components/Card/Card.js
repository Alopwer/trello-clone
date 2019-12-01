import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './Card.css';

const Card = ({ location, card, labels }) => {
    const items = Object.values(labels).filter(label => label.cardId === card.cardId && !label.selected)
    const labelItems = Object.values(items).map(item => (
        <span key={item.labelId} style={{background : item.color}}></span>
    ))

    return (
        <div className='card-item'>
            <Link to={`${location.pathname}/list/${card.listId}/card/${card.cardId}`} className='card-item-link'>
                {card.title}
                <div className='card-labels'>
                    {labelItems}
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = ({ labels : { byId } }) => ({
    labels : byId
})

export default withRouter(connect(mapStateToProps)(Card));