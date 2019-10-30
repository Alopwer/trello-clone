import React from 'react';
import Times from '../../svg/Times';
import '../Boards.css';

const ModalView = ({ input, inputChange, inputEl, btnEl, listItems, closeModal, currentColor }) => {
    return (
        <div className='modal__content'>
            <div className='modal__content-main'>
                <div style={{background: currentColor}}>
                    <input 
                        value={input} 
                        ref={inputEl} 
                        className='modal-input' 
                        type='text' 
                        placeholder='Add board title' 
                        onChange={inputChange}
                    />
                    <Times closeModal={closeModal}/>
                </div>
                <ul className='modal__grid'>
                    { listItems }
                </ul>
            </div>
            <button 
                ref={btnEl}
                className='modal-button' 
                disabled={!input}
            >
                <div>Create Board</div> 
            </button>
        </div>
    )
}

export default ModalView;