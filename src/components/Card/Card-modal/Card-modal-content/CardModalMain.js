import React, { useRef, useState } from 'react';
import { LabelsCreate, DueDateCreate, ChecklistCreate } from '../../../CardAdditional';

const CardModalMain = ({ updateDescr, list, card }) => {
    const [labels, setLabels] = useState(false)
    const [dueDate, setDueDate] = useState(false)
    const [checklist, setChecklist] = useState(false)

    const textarea = useRef('')
    const onTextareaChange = () => {
        updateDescr({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId,
            text: textarea.current.value
        })
    }

    const createListItem = (stateFunc, state, text, firstStateFunc, secondStateFunc) => {
        return (
            <li>
                <button className='aside-li-button' onClick={() => {
                    stateFunc(!state)
                    firstStateFunc(false)
                    secondStateFunc(false)
                }}>
                    {text}
                </button>
            </li>
        ) 
    }

    return (
        <div className='modal-main'>
            <div className='modal-content'>
                <div className='modal-section'>
                    <h4 className='modal-section-title'>Description</h4>
                    <textarea 
                        ref={textarea}
                        className='modal-description' 
                        value={card.descr}
                        placeholder='Add a description...' 
                        onChange={onTextareaChange}
                    >
                    </textarea>
                </div>
                {
                    card.checklists.map(chkList => (
                        <div>
                            {chkList.title}
                        </div>
                    ))
                }


            </div>
            <aside className='modal-aside'>
                <div className='aside-elements'>
                    <h5 className='aside-title'>ADD TO CARD</h5>
                        <ul className='aside-list'>
                            <div>
                                { createListItem(setDueDate, dueDate, 'Due Date', setChecklist, setLabels) }
                                { dueDate && <DueDateCreate /> }
                            </div>
                            <div>
                                { createListItem(setChecklist, checklist, 'Checklist', setDueDate, setLabels) }
                                { checklist && <ChecklistCreate 
                                    onClose={setChecklist} 
                                    boardId={list.boardId} 
                                    listId={list.listId} 
                                    cardId={card.cardId} /> } 
                            </div>
                            <div>
                                { createListItem(setLabels, labels, 'Labels', setChecklist, setDueDate) }
                                { labels && <LabelsCreate /> }
                            </div>
                        </ul>
                </div>
            </aside>
        </div>
    )
}

export default CardModalMain;