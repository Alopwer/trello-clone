import React, { useRef } from 'react';
import { checkDate } from '../dateFunctions';

const DueDateInputs = ({ transformedDate, setTransformedDate, onDueDate }) => {
    const inputDate = useRef('')

    return (
        <div className='card__input-block'>
            <div className='input__block'>
                <span>Date</span>
                <input 
                    ref={inputDate}
                    autoFocus
                    className='input__block-input'
                    value={transformedDate}
                    onChange={() => setTransformedDate(inputDate.current.value)}
                    onBlur={() => checkDate(inputDate.current.value) && onDueDate(transformedDate)}    
                />
            </div>
        </div>
    )
}

export default DueDateInputs;