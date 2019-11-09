import React from 'react';
import Item from './Item';

const Items = (props) => {
    return (
        <div>
            {
                props.items.map(item => (
                    <Item item={item}/>
                ))
            }
        </div>
    )
}

export default Items;