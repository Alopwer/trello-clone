import React from 'react';
import Times from '../../svg/Times';
import Edit from '../../svg/Edit';

const LabelsCreate = ({ onClose }) => {
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
                        <li className='labels__list-item'>
                            <div className='outer-div' style={{background: 'blue'}}>
                                <span className='span-fade'>
                                    <span className='labels__list-item-color'>color</span>
                                </span>
                            </div>
                            <div className='labels__list-item-btn'>
                                <Edit width='14'/>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className='labels-create-btn'>Create new label</button>
            </div>
        </div>
    )
}

export default LabelsCreate;