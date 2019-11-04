import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Card.css';

const CardComponent = withRouter(props => <Card {...props} />)

const Card = (props) => {
    return (
        <Link to={`${props.location.pathname}/card/${1}`} className='card-item'>
            {props.children}
        </Link>
    )
}

export default CardComponent;