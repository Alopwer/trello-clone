import React from 'react';
import Times from '../../../svg/Times';

const CardModalHeader = ({ cardTitle, listTitle, closeModal }) => {
    return (
        <div className='modal-header'>
            <div className='modal-section'>
                <h3 className='modal-section-main-title'>{cardTitle}</h3>
                <p>in list {listTitle}</p>
            </div>
            <div className='modal-close' onClick={closeModal}>
                <Times className='modal-times' width='12' color='#42526e' />
            </div>
        </div>
    )
}

export default CardModalHeader;