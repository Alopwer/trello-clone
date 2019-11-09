import React, { useState } from 'react';
import { LabelsCreate, DueDateCreate, ChecklistCreate } from '../../../CardAdditional';

const CardModalAside = ({ list, card }) => {
    const [labels, setLabels] = useState(false)
    const [dueDate, setDueDate] = useState(false)
    const [checklist, setChecklist] = useState(false)

    const createListItem = (stateFunc, state, text, firstStateFunc, secondStateFunc) => {
        return (
            <div>
                <button className='aside-li-button' onClick={() => {
                    stateFunc(!state)
                    firstStateFunc(false)
                    secondStateFunc(false)
                }}>
                    {text}
                </button>
            </div>
        ) 
    }

    return (
        <aside className='modal-aside'>
            <div className='aside-elements'>
                <h5 className='aside-title'>ADD TO CARD</h5>
                    <ul className='aside-list'>
                        <li>
                            { createListItem(setDueDate, dueDate, 'Due Date', setChecklist, setLabels) }
                            { dueDate && <DueDateCreate /> }
                        </li>
                        <li>
                            { createListItem(setChecklist, checklist, 'Checklist', setDueDate, setLabels) }
                            { checklist && <ChecklistCreate 
                                onClose={setChecklist} 
                                boardId={list.boardId} 
                                listId={list.listId} 
                                card={card} /> } 
                        </li>
                        <li>
                            { createListItem(setLabels, labels, 'Labels', setChecklist, setDueDate) }
                            { labels && <LabelsCreate /> }
                        </li>
                    </ul>
            </div>
        </aside>
    )
}

export default CardModalAside;