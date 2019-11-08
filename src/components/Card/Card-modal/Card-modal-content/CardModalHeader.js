import React from 'react';
import Times from '../../../svg/Times';

const CardModalHeader = ({ cardTitle, listTitle, closeModal }) => {
    return (
        <div className='modal-header'>
            <div className='modal-section'>
                <h3 className='modal-section-main-title'>{cardTitle}</h3>
                <p>in list {listTitle}</p>
            </div>
            <div className='modal-close'>
                <Times closeModal={closeModal} className={'modal-times'}/>
            </div>
        </div>
    )
}

export default CardModalHeader;