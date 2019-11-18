import React, { useState, useRef, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { changeDateStatus } from '../../../actions'; 
import DueDateCreate from './DueDateCreate';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import { getDateParts } from './dateFunctions';
import '../Checklist/Items/Item.css';

const DueDate = ({ dueDate, changeDateStatus }) => {
    const { date, done } = dueDate  
    const checkbox = useRef('')
    const { list, card } = useContext(ListContext)

    const [create, setCreate] = useState(false)
    const [dateStatus, setDateStatus] = useState('')

    useEffect(() => {
        if (checkOverdue(date)) {
            setDateStatus('OVERDUE')
        } else if (done) {
            setDateStatus('COMPLETED')
        } else { 
            setDateStatus('')
        }
    }, [done, date])

    const checkOverdue = (date) => {
        const today = new Date()
        const todayDay = today.getDate()
        const todayMonth = today.getMonth()
        const todayYear = today.getFullYear()
        const [day, month, year] = getDateParts(date)
        if (todayYear === year) {
            if (todayMonth === month) {
                return todayDay > day
            }
            return todayMonth > month
        }
        return todayYear > year
    }

    const statusStyle = () => {
        return dateStatus === 'OVERDUE' ? {background: 'rgb(236, 148, 136)'} : {}
    }

    return (
        <div className='date-section'>
            <h5 className='date-title'>Due Date</h5>
            <div className='date-btn-block'>
                <div className='date-content'>
                    <label className="checkbox">
                        <input 
                            ref={checkbox}
                            checked={done}
                            type="checkbox" 
                            onChange={() => changeDateStatus({
                                    boardId: list.boardId,
                                    listId: list.listId,
                                    cardId: card.cardId,
                                    value: !done
                                })}
                        />
                        <span></span>
                    </label>
                <button 
                    className='date' 
                    onClick={() => setCreate(!create)}
                >
                    { date } 
                    { done && <span style={statusStyle()}>{ dateStatus }</span> }
                </button>
                </div>
                <div className='date-create'>
                    { create && <DueDateCreate onClose={setCreate}/> }
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    changeDateStatus: (value) => dispatch(changeDateStatus(value))
})

export default connect(null, mapDispatchToProps)(DueDate);