import React from 'react';
import Description from '../../../CardAdditional/Description/Description';
import Checklists from '../../../CardAdditional/Checklist/Checklists';
import DueDate from '../../../CardAdditional/DueDate/DueDate';
import CardModalAside from './CardModalAside';

const CardModalMain = ({ card }) => {
    return (
        <div className='modal-main'>
            <div className='modal-content'>
                { card.dueDate.date && <DueDate dueDate={card.dueDate}/> }
                <Description />
                <Checklists checklists={card.checklists} />
            </div>
            <CardModalAside />
        </div>
    )
}

export default CardModalMain;