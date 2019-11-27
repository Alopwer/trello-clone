import { combineReducers } from 'redux'

const deleteChecklist = (state, action) => {
    const { payload : { checklistId, cardId } } = action
    const card = state[cardId]
    return {
        ...state,
        [cardId] : {
            ...card,
            checklists : card.checklists.filter(id => id !== checklistId)
        }
    }
}

const deleteCard = (state, action) => {
    const { payload : { cardId } } = action
    const { [cardId]: card, ...withDeletedCard } = state
    return withDeletedCard
}

const changeDateStatus = (state, action) => {
    const { payload : { cardId, value } } = action
    const card = state[cardId]
    return {
        ...state,
        [cardId] : {
            ...card,
            dueDate : {
                ...card.dueDate,
                done : value
            }
        }
    }
}

const updateDueDate = (state, action) => {
    const { payload : { cardId, value } } = action
    const card = state[cardId]
    return {
        ...state,
        [cardId] : {
            ...card,
            dueDate : {
                ...card.dueDate,
                date : value
            }
        }
    }
}

const updateCardDescr = (state, action) => {
    const { payload : { cardId, text : descr } } = action
    const card = state[cardId]
    return {
        ...state,
        [cardId] : {
            ...card,
            descr
        }
    }
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
            dueDate : {
                date : '',
                done : false
            },
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
        case 'UPDATE_CARD_DESCR':
            return updateCardDescr(state, action)
        case 'UPDATE_DUE_DATE':
            return updateDueDate(state, action)
        case 'CHANGE_DUE_DATE_STATUS':
            return changeDateStatus(state, action)
        case 'DELETE_CARD':
            return deleteCard(state, action)
        case 'DELETE_CHECKLIST':
            return deleteChecklist(state, action)
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