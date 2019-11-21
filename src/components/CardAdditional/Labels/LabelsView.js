import React, { useRef, useState, useContext } from 'react';
import Times from '../../svg/Times';

const LabelsView = ({ onClose, items, setItemCreate, setLabel, setColor }) => {
    const onItemCreate = () => {
        setItemCreate(true)
        setLabel(false)
        setColor('')
    }

    return (
        <div className='card__addit'>
            <div className='card__addit-item'>
                <h5 className='card__addit-title'>Labels</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='labels-container'>
                <input 
                    className='card__addit-input labels-input'
                    placeholder='Search labels...'    
                />
                <div className='labels-content'>
                    <p className='labels-title'>LABELS</p>
                    <ul className='labels__list'>
                        { items }
                    </ul>
                </div>
                <button 
                    className='labels-create-btn' 
                    onClick={onItemCreate}
                >
                    Create new label
                </button>
            </div>
        </div>
    )
}

export default LabelsView;