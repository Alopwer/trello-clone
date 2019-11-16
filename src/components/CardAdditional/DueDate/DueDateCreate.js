import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDueDate } from '../../../actions';
import { checkDate, getDateParts } from './dateFunctions';
import DueDateMain from './DueDateParts/DueDateMain';
import '../CardAdditional.css';

const DueDateCreate = ({ onClose, updateDueDate, list, card }) => {
    const [date, setDate] = useState()
    const [transformedDate, setTransformedDate] = useState(card.dueDate)

    useEffect(() => {
        if (date) changeDate(date)

        if (transformedDate && !date) {
            const [day, month, year] = getDateParts(transformedDate)
            setDate(new Date(year, month, day))
        } else if (!transformedDate) {
            setDate(new Date())
        }
    }, [])

    const changeDate = (date) => {
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        setTransformedDate(`${day}/${month}/${year}`)
    }

    const onDueDate = (value) => {
        if (checkDate(transformedDate)) {
            updateDueDate({
                boardId: list.boardId,
                listId: list.listId,
                cardId: card.cardId,
                dueDate: value
            })
        }
        if (value) {
            const [day, month, year] = getDateParts(value)
            setDate(new Date(year, month, day))
        } else {
            // console.log(value)
            setDate(new Date())
        }
    }

    return (
        <DueDateMain 
            date={date}
            setDate={setDate}
            transformedDate={transformedDate}
            setTransformedDate={setTransformedDate}
            onClose={onClose}
            onDueDate={onDueDate}
            changeDate={changeDate}
        />
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDueDate : (value) => dispatch(updateDueDate(value))
    }
}

export default connect(null, mapDispatchToProps)(DueDateCreate);