import React, { useRef, useState } from 'react';
import { Labels, DueDate, Checklist } from '../../../CardAdditional';

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
                { checklist && <Checklist /> }
                { labels && <Labels /> }
                { dueDate && <DueDate /> }
            </div>
            <aside className='modal-aside'>
                <div className='aside-elements'>
                    <h5 className='aside-title'>ADD TO CARD</h5>
                        <ul className='aside-list'>
                            <li><button className='aside-li-button' onClick={() => setDueDate(!dueDate)}>Due Date</button></li>
                            <li><button className='aside-li-button' onClick={() => setChecklist(!checklist)}>Checklist</button></li>
                            <li><button className='aside-li-button' onClick={() => setLabels(!labels)}>Labels</button></li>
                        </ul>
                </div>
            </aside>
        </div>
    )
}

export default CardModalMain;