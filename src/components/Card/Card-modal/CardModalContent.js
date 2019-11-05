import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../Card.css';

const CardModalContent = (props) => {
    const list = props.lists.find(list => list.listId === +props.match.params.listId).cards
    const card = list.find(card => card.cardId === +props.match.params.cardId)
    return (
        <div>
            {card.title}
            Description
            Due Date
            Checklist
        </div>
    )
}

const mapStateToProps = ({ currentBoard : { lists } }) => {
    return { lists }
}

export default withRouter(connect(mapStateToProps)(CardModalContent));