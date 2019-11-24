import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ListContext } from '../../Card/Card-modal/CardModalContent';
import { deleteCard } from '../../../actions';

const DeleteCard = ({ history, deleteCard }) => {
    const { list, card } = useContext(ListContext)

    const onDeleteCard = () => {
        deleteCard({
            boardId: list.boardId,
            listId: list.listId,
            cardId: card.cardId
        })
        history.goBack()
    }

    return (
        <div className='delete-card-btn'>
            <button onClick={onDeleteCard}>
                Delete card
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (value) => dispatch(deleteCard(value))
})

export default withRouter(connect(null, mapDispatchToProps)(DeleteCard))