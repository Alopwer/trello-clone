import React, { useContext } from 'react';
import Times from '../../../svg/Times';
import { ListContext } from '../CardModalContent';

const CardModalHeader = ({ closeModal }) => {
    const { list, card } = useContext(ListContext)
    
    return (
        <>
            <div className='modal-header'>
                <div className='modal-section'>
                    <h3 className='modal-section-main-title'>{card.title}</h3>
                    <p>in list {list.title}</p>
                </div>
                <div className='modal-close' onClick={closeModal}>
                    <Times className='modal-times' width='12' color='#42526e' />
                </div>
            </div>
        </>
    )
}

export default CardModalHeader;