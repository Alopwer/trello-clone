import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Card.css';

const Card = ({ location, card}) => {
    return (
        <Link to={`${location.pathname}/list/${card.listId}/card/${card.cardId}`} className='card-item'>
            {card.title}
        </Link>
    )
}

export default withRouter(Card);