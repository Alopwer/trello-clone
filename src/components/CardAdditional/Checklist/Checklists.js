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
                            card={card}
                            list={list}
                            checklist={checklist}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Checklists;