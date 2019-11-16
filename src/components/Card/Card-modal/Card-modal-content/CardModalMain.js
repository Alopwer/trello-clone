import React, { useContext } from 'react';
import Description from '../../../CardAdditional/Description/Description';
import Checklists from '../../../CardAdditional/Checklist/Checklists';
import CardModalAside from './CardModalAside';
import DueDate from '../../../CardAdditional/DueDate/DueDate';
import { ListContext } from '../CardModalContent';

const CardModalMain = ({ card }) => {
    const ListContextConsumer = useContext(ListContext)
    console.log(ListContextConsumer)
    return (
        <div className='modal-main'>
            <div className='modal-content'>
                <Description />
                <Checklists checklists={card.checklists} />
                <DueDate />
            </div>
            <CardModalAside />
        </div>
    )
}

export default CardModalMain;