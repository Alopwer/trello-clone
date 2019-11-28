import React, { useRef, useState } from 'react';
import Times from '../../svg/Times';

const LabelItemModify = ({ setItemCreate, onClose, onAddLabel, onUpdateLabel, onDeleteLabel, colors, colorValue, label }) => {
    const name = label && label.title || ''
    const inputEl = useRef('')
    const [inputValue, setInputValue] = useState(name)

    return (
        <div className='card__addit'>
            <div className='card__addit-item'>
                <div className='card__addit-back' onClick={() => setItemCreate(false)}>
                    &lt;
                </div>
                <h5 className='card__addit-title'>{ label ? 'Change' : 'Create' } Label</h5>
                <div onClick={() => onClose(false)}>
                    <Times width='10' className='card__addit-times'/>
                </div>
            </div>
            <div className='labels-container'>
                <div className='label-name-container'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        id='name'
                        className='card__addit-input labels-input'
                        ref={inputEl}
                        value={inputValue}
                        maxLength='28'
                        autoFocus
                        onChange={() => setInputValue(inputEl.current.value)}
                    />
                </div>
                <div className='label-color-container'>
                    <p>Select a color</p>
                    <ul className='label-color-list'>
                        { colors }
                    </ul>
                </div>
                <div className='label-btn-container'>
                    <button 
                        className='label-btn' 
                        onClick={() => { 
                            if (colorValue && inputValue) {
                                return label ? 
                                    onUpdateLabel(colorValue, inputValue, label.labelId) 
                                        : 
                                    onAddLabel(colorValue, inputValue)
                            }
                        }}
                    >
                        <span className='light-layer'>
                            Save
                        </span>
                    </button>
                    <button 
                        className='label-btn' 
                        onClick={() => label && onDeleteLabel(label.labelId)}
                    >
                        <span className='light-layer'>
                            Delete
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LabelItemModify;