import React from 'react';
import Description from '../../../CardAdditional/Description/Description';
import Checklists from '../../../CardAdditional/Checklist/Checklists';
import CardModalAside from './CardModalAside';

const CardModalMain = ({ list, card }) => {
    return (
        <div className='modal-main'>
            <div className='modal-content'>
                <Description list={list} card={card} value={card.descr}/>
                <Checklists checklists={card.checklists} card={card} list={list}/>
            </div>
            <CardModalAside card={card} list={list} />
        </div>
    )
}

export default CardModalMain;