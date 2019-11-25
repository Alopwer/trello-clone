import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardModalHeader from './Card-modal-content/CardModalHeader';
import CardModalMain from './Card-modal-content/CardModalMain';

const ListContext = React.createContext('')

const CardModalContent = ({ boards, match, closeModal }) => {
    const board = boards.find(board => board.boardId === +match.params.id)
    const list = board.lists.find(list => list.listId === +match.params.listId)
    const card = list.cards.find(card => card.cardId === +match.params.cardId)

    return (
        <ListContext.Provider value={{ list, card }}>
            {
                card 
                    && 
                <>
                    <CardModalHeader closeModal={closeModal} />
                    <CardModalMain />
                </>
            }
        </ListContext.Provider>
    )
}

const mapStateToProps = ({ boards }) => {
    return { boards }
}

export { ListContext }
export default withRouter(connect(mapStateToProps)(CardModalContent));