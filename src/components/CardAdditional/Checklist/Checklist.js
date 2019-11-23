import React, { useContext } from 'react';
import './Checklist.css';
import ProgressBar from '../../ProgressBar';
import AddItem from './Items/AddItem';
import Items from './Items/Items';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const Checklist = ({ checklist, onDeleteChecklist }) => {
    const { list, card } = useContext(ListContext)
    const progress = checklist.items.length

    return (
        <>
            <div className='checklist__header'>
                <p>{checklist.title}</p>
                <button className='header-btn' onClick={() => onDeleteChecklist(checklist.checklistId)}>Delete</button>
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
                <AddItem checklist={checklist}/>
            </div>
        </>
    )
}

export default Checklist;