import React, { useContext } from 'react';
import './Checklist.css';
import ProgressBar from '../../ProgressBar';
import AddItem from './Items/AddItem';
import Items from './Items/Items';
import { ListContext } from '../../Card/Card-modal/CardModalContent';

const Checklist = ({ checklist, onDeleteChecklist }) => {
    const { card } = useContext(ListContext)

    return (
        <>
            <div className='checklist__header'>
                <p>{checklist.title}</p>
                <button className='header-btn' onClick={() => onDeleteChecklist(checklist.checklistId)}>Delete</button>
            </div>
            <ProgressBar checklistId={checklist.checklistId} />
            <div className='checklist__items'>
                <Items
                    cardId={card.cardId}
                    checklistId={checklist.checklistId}
                />
                <AddItem checklist={checklist}/>
            </div>
        </>
    )
}

export default Checklist;