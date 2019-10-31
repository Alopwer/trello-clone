import React from 'react';
import './List.css';
import Cards from '../Cards';

const List = (props) => {
    return (
        <div>
            {props.children}
            <Cards cards={props.cards}/>
        </div>
    )
}

export default List;