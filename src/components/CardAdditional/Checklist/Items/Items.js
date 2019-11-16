import React, { useContext } from 'react';
import Item from './Item';
import { ListContext } from '../../../Card/Card-modal/CardModalContent';

const Items = ({ checklistId, items }) => {
    const { list, card } = useContext(ListContext)
    
    return (
        <div className='checklist-items'>
            {
                items.map(item => (
                    <div className='checklist__item' key={item.itemId}>
                        <Item   
                            item={item}
                            cardId={card.cardId}
                            list={list}
                            checklistId={checklistId}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Items;