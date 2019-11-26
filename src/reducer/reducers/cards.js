import { combineReducers } from 'redux'

const deleteCard = (state, action) => {
    const { payload : { cardId } } = action
    const { [cardId]: card, ...withDeletedCard } = state
    return withDeletedCard
}

const addChecklist = (state, action) => {
    const { payload : { cardId, checklistId } } = action
    const card = state[cardId]

    return {
        ...state,
        checklists : card.checklists.concat(checklistId)
    }
}

const addLabel = (state, action) => {
    const { payload : { cardId, labelId } } = action
    const card = state[cardId]
    
    return {
        ...state,
        labels : card.labels.concat(labelId)
    }
}

const addCardEntity = (state, action) => {
    const { payload : { title, cardId, listId } } = action
    return {
        ...state,
        [cardId] : { 
            listId,
            cardId, 
            title, 
            descr: '',
            dueDate : {},
            labels : [],
            checklists : []
        }
    }
}

function cardsById(state = {}, action) {
    switch(action.type){
        case 'ADD_CARD':
            return addCardEntity(state, action)
        case 'ADD_LABEL':
            return addLabel(state, action)
        case 'ADD_CHECKLIST':
            return addChecklist(state, action)
        case 'DELETE_CARD':
            return deleteCard(state, action)
        default:
            return state
    }
}

const deleteCardId = (state, action) => {
    const { payload : { cardId } } = action
    return state.filter(id => id !== cardId)
}

const addCardId = (state, action) => {
    const { payload : { cardId } } = action
    return state.concat(cardId)
}

function allCards(state = [], action) {
    switch(action.type){
        case 'ADD_CARD':
            return addCardId(state, action)
        case 'DELETE_CARD':
            return deleteCardId(state, action)
        default:
            return state
    }
}

const cards = combineReducers({
    byId: cardsById,
    allIds: allCards
})

export default cards