import React from 'react';
import Item from './Item';

const Items = (props) => {
    return (
        <div className='checklist-items'>
            {
                props.items.map(item => (
                    <div className='checklist__item' key={item.itemId}>
                        <Item   
                            item={item}
                            cardId={props.cardId}
                            list={props.list}
                            checklistId={props.checklistId}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Items;