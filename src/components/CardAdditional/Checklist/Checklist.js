import React from 'react';
import './Checklist.css';
import ProgressBar from '../../ProgressBar';
import AddItem from './Items/AddItem';
import Items from './Items/Items';

const Checklist = (props) => {
    const progress = props.items.length
    const filteredItems = props.items.filter(item => item.done)

    return (
        <>
            <div className='checklist__header'>
                <p>{props.title}</p>
                <button className='header-btn'>Delete</button>
            </div>
            <ProgressBar 
                progress={progress}
                items={filteredItems}
            />
            <div className='checklist__items'>
                <Items 
                    items={props.items} 
                    cardId={props.card.cardId} 
                    list={props.list} 
                    checklistId={props.checklist.checklistId}
                />
                <AddItem card={props.card} list={props.list} checklist={props.checklist}/>
            </div>
        </>
    )
}

export default Checklist;