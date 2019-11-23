import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Times from '../svg/Times';
import './Card.css';

const Card = ({ location, card, onDeleteCard }) => {
    return (
        <div className='card-item'>
            <Link to={`${location.pathname}/list/${card.listId}/card/${card.cardId}`} className='card-item-link'>
                {card.title}
            </Link>
            <div className='card-item-times' onClick={() => onDeleteCard(card.cardId)}>
                <Times width='10'/>
            </div>
        </div>
    )
}

export default withRouter(Card);