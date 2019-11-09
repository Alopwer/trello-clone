import React, { useRef } from 'react';

const Description = ({ value, onTextareaChange }) => {
    const textarea = useRef('')

    return (
        <div className='modal-section'>
            <h4 className='modal-section-title'>Description</h4>
            <textarea 
                ref={textarea}
                className='modal-description' 
                value={value}
                placeholder='Add a description...' 
                onChange={() => onTextareaChange(textarea.current.value)}
            >
            </textarea>
        </div>
    )
}

export default Description;