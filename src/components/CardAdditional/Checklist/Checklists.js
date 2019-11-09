import React from 'react';
import Checklist from './Checklist';
import './Checklist.css';

const Checklists = ({ checklists, card, list }) => {
    return (
        <>
            {
                checklists.map(checklist => (
                    <div className='checklist' key={checklist.id}>
                        <Checklist 
                            title={checklist.title} 
                            items={card.checklists[checklist.id].items} 
                            card={card}
                            list={list}
                            checklist={card.checklists[checklist.id]}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Checklists;