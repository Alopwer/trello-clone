import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Card.css';

const Card = ({ location, card }) => {
    return (
        <div className='card-item'>
            <Link to={`${location.pathname}/list/${card.listId}/card/${card.cardId}`} className='card-item-link'>
                {card.title}
            </Link>
        </div>
    )
}

export default withRouter(Card);