import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CardModal.css';
import { updateCardDescr } from '../../../actions';
import CardModalHeader from './Card-modal-content/CardModalHeader';
import CardModalMain from './Card-modal-content/CardModalMain';

const CardModalContent = (props) => {
    const list = props.lists.find(list => list.listId === +props.match.params.listId)
    const card = list.cards.find(card => card.cardId === +props.match.params.cardId)

    return (
        <>
            <CardModalHeader 
                cardTitle={card.title}
                listTitle={list.title}
                closeModal={props.closeModal}
            />
            <CardModalMain 
                list={list}
                card={card}
                updateDescr={props.updateDescr}
            />
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