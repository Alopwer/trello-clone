import React, { useContext } from 'react';
import Checklist from './Checklist';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import './Checklist.css';

const Checklists = () => {
    const { card } = useContext(ListContext)

    return (
        <>
            {
                card.checklists.map(checklist => (
                    <div className='checklist' key={checklist.checklistId}>
                        <Checklist checklist={checklist} />
                    </div>
                ))
            }
        </>
    )
}

export default Checklists;