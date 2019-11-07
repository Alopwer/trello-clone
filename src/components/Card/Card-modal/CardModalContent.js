import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CardModal.css';
import Times from '../../svg/Times';
import { updateCardDescr } from '../../../actions';

const CardModalContent = (props) => {
    const textarea = useRef('')
    const list = props.lists.find(list => list.listId === +props.match.params.listId)
    const card = list.cards.find(card => card.cardId === +props.match.params.cardId)
    return (
        <>
            <div className='modal-header'>
                <div className='modal-section'>
                    <h3 className='modal-section-main-title'>{card.title}</h3>
                    <p>in list {list.title}</p>
                </div>
                <div className='modal-close'>
                    <Times closeModal={props.closeModal} className={'modal-times'}/>
                </div>
            </div>

            <div className='modal-main'>
                <div className='modal-content'>
                    <div className='modal-section'>
                        <h4 className='modal-section-title'>Description</h4>
                        <textarea 
                            ref={textarea}
                            className='modal-description' 
                            value={card.descr}
                            placeholder='Add a description...' 
                            onChange={() => {
                                props.updateDescr({
                                    boardId: list.boardId,
                                    listId: list.listId,
                                    cardId: card.cardId,
                                    text: textarea.current.value
                                })
                            }}
                        >
                        </textarea>
                    </div>
                    {/* <div className='modal-section'>
                        <h4 className='modal-section-title'>Due Date </h4>
                        <p className='modal-date'>
                            Due Date    
                        </p>
                    </div>
                    <div className='modal-section'>
                        Checklist
                    </div> */}
                </div>
                <aside className='modal-aside'>
                    <div className='aside-elements'>
                        <h5 className='aside-title'>ADD TO CARD</h5>
                            <ul className='aside-list'>
                                <li><button className='aside-li-button'>Labels</button></li>
                                <li><button className='aside-li-button'>Checklist</button></li>
                                <li><button className='aside-li-button'>Due Date</button></li>
                            </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

const mapStateToProps = ({ currentBoard : { lists } }) => {
    return { lists }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateDescr : (value) => dispatch(updateCardDescr(value))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardModalContent));