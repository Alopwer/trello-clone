import React from 'react';

const DueDateButtons = ({ onDueDate, onClose, transformedDate }) => {

    return (
        <div className='card__btn-block'>
            <button className='btn__block-btn btn-success' onClick={() => {
                onDueDate(transformedDate)
                onClose(false)
            }}>
                Save
            </button>
            <button className='btn__block-btn btn-warning' onClick={() => {
                onDueDate('')
                onClose(false)
            }}>
                Remove
            </button>
        </div>
    )
}

export default DueDateButtons;