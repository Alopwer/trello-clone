import React from 'react';
import Description from '../../../CardAdditional/Description/Description';
import Checklists from '../../../CardAdditional/Checklist/Checklists';
import CardModalAside from './CardModalAside';

const CardModalMain = ({ updateDescr, list, card }) => {

    const onTextareaChange = (text) => {
        updateDescr({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
            text
        })
    }

    return (
        <div className='modal-main'>
            <div className='modal-content'>
                <Description onTextareaChange={onTextareaChange} value={card.descr}/>
                <Checklists checklists={card.checklists} card={card} list={list}/>
            </div>
            <CardModalAside card={card} list={list} />
        </div>
    )
}

export default CardModalMain;