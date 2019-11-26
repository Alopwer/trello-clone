import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardModalHeader from './Card-modal-content/CardModalHeader';
import CardModalMain from './Card-modal-content/CardModalMain';

const ListContext = React.createContext('')

const CardModalContent = ({ lists, cards, match, closeModal }) => {
    const list = Object.values(lists).find(list => list.listId === match.params.listId)
    const card = Object.values(cards).find(card => card.cardId === match.params.cardId)
    
    return (
        <ListContext.Provider value={{ list, card }}>
            {
                card && 
                <>
                    <CardModalHeader closeModal={closeModal} />
                    <CardModalMain />
                </>
            }
        </ListContext.Provider>
    )
}

const mapStateToProps = ({ lists : { byId }, cards : { byId : card } }) => {
    return { lists : byId, cards : card }
}

export { ListContext }
export default withRouter(connect(mapStateToProps)(CardModalContent));