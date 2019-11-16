import React from 'react';
import Times from '../../../svg/Times';
import Calendar from 'react-calendar';
import DueDateButtons from './DueDateButtons';
import '../../CardAdditional.css';
import DueDateInput from './DueDateInput';

const DueDateMain = ({ date, setDate, onClose, onDueDate, transformedDate, setTransformedDate, changeDate }) => {
    return (
        <div className='card__addit'>
            <div className='card__addit-duedate'>
                <h5 className='card__addit-title'>Change Due Date</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='card__addit-content'>
                <DueDateInput 
                    transformedDate={transformedDate}
                    setTransformedDate={setTransformedDate}
                    onDueDate={onDueDate}
                />
                <Calendar 
                    locale='en'
                    className='card-calendar'
                    onChange={(date) =>  {
                        setDate(date)
                        changeDate(date)
                    }}
                    value={date}
                />
                <DueDateButtons 
                    onDueDate={onDueDate} 
                    onClose={onClose}
                    transformedDate={transformedDate}
                />
            </div>
        </div>
    )
}

export default DueDateMain;