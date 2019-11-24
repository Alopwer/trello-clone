import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardModalHeader from './Card-modal-content/CardModalHeader';
import CardModalMain from './Card-modal-content/CardModalMain';

const ListContext = React.createContext('')

const CardModalContent = ({ lists, match, closeModal }) => {
    const list = lists.find(list => list.listId === +match.params.listId)
    const card = list.cards.find(card => card.cardId === +match.params.cardId)

    return (
        <ListContext.Provider value={{list, card}}>
            {
                card 
                    && 
                <>
                    <CardModalHeader 
                        cardTitle={card.title}
                        listTitle={list.title}
                        closeModal={closeModal}
                    />
                    <CardModalMain 
                        list={list}
                        card={card}
                    />
                </>
            }
        </ListContext.Provider>
    )
}

const mapStateToProps = ({ currentBoard : { lists } }) => {
    return { lists }
}

export { ListContext }
export default withRouter(connect(mapStateToProps)(CardModalContent));