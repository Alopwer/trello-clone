import React, { useContext } from 'react';
import Description from '../../../CardAdditional/Description/Description';
import Checklists from '../../../CardAdditional/Checklist/Checklists';
import DueDate from '../../../CardAdditional/DueDate/DueDate';
import DeleteCard from '../../../CardAdditional/DeleteCard/DeleteCard';
import CardModalAside from './CardModalAside';
import Labels from '../../../CardAdditional/Labels/Labels';
import { ListContext } from '../CardModalContent';

const CardModalMain = () => {
    const { card } = useContext(ListContext)

    return (
        <div className='modal-main'>
            <div className='modal-content'>
                {/* { card.labels.length !== 0 && <Labels labels={card.labels}/> }
                { card.dueDate.date && <DueDate dueDate={card.dueDate}/> } */}
                <Description />
                <Checklists checklists={card.checklists} />
                <DeleteCard />
            </div>
            <CardModalAside />
        </div>
    )
}

export default CardModalMain;