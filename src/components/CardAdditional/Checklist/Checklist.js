import React from 'react';
import './Checklist.css';
import ProgressBar from '../../ProgressBar';
import AddItem from './Items/AddItem';
import Items from './Items/Items';

const Checklist = ({ checklist, card, list }) => {
    const progress = checklist.items.length

    return (
        <>
            <div className='checklist__header'>
                <p>{checklist.title}</p>
                <button className='header-btn'>Delete</button>
            </div>
            <ProgressBar 
                progress={progress}
                items={checklist.items}
            />
            <div className='checklist__items'>
                <Items 
                    items={checklist.items} 
                    cardId={card.cardId} 
                    list={list} 
                    checklistId={checklist.checklistId}
                />
                <AddItem card={card} list={list} checklist={checklist}/>
            </div>
        </>
    )
}

export default Checklist;