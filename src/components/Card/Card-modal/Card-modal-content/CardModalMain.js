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
                <Labels />
                { card.dueDate.date && <DueDate dueDate={card.dueDate}/> }
                <Description />
                <Checklists />
            </div>
            <div className='aside-main'>
                <CardModalAside />
                <DeleteCard />
            </div>
        </div>
    )
}

export default CardModalMain;