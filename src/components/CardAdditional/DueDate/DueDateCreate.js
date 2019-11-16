import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { addDueDate } from '../../../actions';
import Times from '../../svg/Times';
import Calendar from 'react-calendar';
import '../CardAdditional.css';

const DueDateCreate = ({ onClose, addDueDate, list, card }) => {
    const [date, setDate] = useState(new Date())
    const [transformedDate, setTransformedDate] = useState(new Date())
    const inputDate = useRef('')

    useEffect(() => {
        changeDate(new Date())
    }, [])

    const changeDate = (date) => {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        setTransformedDate(`${day}/${month}/${year}`)
    }

    const checkDate = (date) => {
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
            return false;

        const parts = date.split("/");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        if(year < 2001 || year > 3000 || month == 0 || month > 12)
            return false;

        const monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;

        return day > 0 && day <= monthLength[month - 1] ? setDate(new Date(year, month, day)) : false
    }

    return (
        <div className='card__addit'>
            <div className='card__addit-duedate'>
                <h5 className='card__addit-title'>Change Due Date</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='card__addit-content'>
                <div className='card__input-block'>
                    <div className='input__block'>
                        <span>Date</span>
                        <input 
                            ref={inputDate}
                            className='input__block-input'
                            value={transformedDate}
                            onChange={() => setTransformedDate(inputDate.current.value)}
                            onBlur={() => checkDate(inputDate.current.value) && setTransformedDate(inputDate.current.value)}    
                        />
                    </div>
                    <div className='input__block'>
                        <span>Time</span>
                        <input className='input__block-input' />
                    </div>
                </div>
                <Calendar 
                    locale='en'
                    className='card-calendar'
                    onChange={(date) =>  {
                        setDate(date)
                        changeDate(date)
                    }}
                    value={date}
                />
                <div className='card__btn-block'>
                    <button className='btn__block-btn btn-success'>
                        Save
                    </button>
                    <button className='btn__block-btn btn-warning'>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addDueDate : (value) => dispatch(addDueDate(value))
    }
}

export default connect(null, mapDispatchToProps)(DueDateCreate);