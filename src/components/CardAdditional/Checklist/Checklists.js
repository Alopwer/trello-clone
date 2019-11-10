import React from 'react';
import Checklist from './Checklist';
import './Checklist.css';

const Checklists = ({ checklists, card, list }) => {
    return (
        <>
            {
                checklists.map(checklist => (
                    <div className='checklist' key={checklist.checklistId}>
                        <Checklist 
                            title={checklist.title} 
                            items={card.checklists[checklist.checklistId].items} 
                            card={card}
                            list={list}
                            checklist={card.checklists[checklist.checklistId]}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Checklists;