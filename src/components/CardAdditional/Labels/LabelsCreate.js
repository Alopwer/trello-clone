import React from 'react';
import Times from '../../svg/Times';

const LabelsCreate = () => {
    return (
        <div className='card__addit' 
            onKeyPress={(e) => e.which === 13}
        >
            <div className='card__addit-item'>
                <h5 className='card__addit-title'>Labels</h5>
                <div onClick={() => console.log('close')}>
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
                            <span className='outer-span'><span className='labels__list-item-color'>color</span></span>
                            <span className='labels__list-item-btn'>btn</span>
                        </li>
                        <li className='labels__list-item'>
                            <span className='labels__list-item-color'>color</span>
                            <span className='labels__list-item-btn'>btn</span>
                        </li>
                        <li className='labels__list-item'>
                            <span className='labels__list-item-color'>color</span>
                            <span className='labels__list-item-btn'>btn</span>
                        </li>
                        <li className='labels__list-item'>
                            <span className='labels__list-item-color'>color</span>
                            <span className='labels__list-item-btn'>btn</span>
                        </li>
                    </ul>
                </div>
                <button className='labels-create-btn'>Create new label</button>
            </div>
        </div>
    )
}

export default LabelsCreate;