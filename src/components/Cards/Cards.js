import React from 'react';
import './Cards.css';

const Cards = ({ cards }) => {
    const items = cards.map((card, i) => <p key={i}>{card.title}</p>) || false   

    return (
        <div>
            {items}
        </div>
    )
}

export default Cards;