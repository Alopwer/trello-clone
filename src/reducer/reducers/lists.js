import { combineReducers } from 'redux'

const deleteCard = (state, action) => {
    const { payload : { listId, cardId } } = action
    const list = state[listId]
    return {
        ...state,
        [listId] : {
            ...list,
            cards : list.cards.filter(id => id !== cardId)
        }
    }
}

const deleteList = (state, action) => {
    const { payload : { listId } } = action
    const { [listId]: list, ...withDeletedList } = state
    return withDeletedList
}

const changeListName = (state, action) => {
    const { payload : { listId, title } } = action
    const list = state[listId]
    return {
        ...state,
        [listId] : {
            ...list,
            title
        }
    }
}

const addCard = (state, action) => {
    const { payload : { listId, cardId } } = action
    const list = state[listId]
    return {
        ...state,
        [listId] : {
            ...list,
            cards: list.cards.concat(cardId)
        }
    }
}

const addListEntity = (state, action) => {
    const { payload : { title, listId, boardId } } = action
    return {
        ...state,
        [listId] : { boardId, listId, title, cards : [] }
    }
}

function listsById(state = {}, action) {
    switch(action.type){
        case 'ADD_LIST':
            return addListEntity(state, action)
        case 'ADD_CARD':
            return addCard(state, action)
        case 'CHANGE_LIST_NAME':
            return changeListName(state, action)
        case 'DELETE_LIST':
            return deleteList(state, action)
        case 'DELETE_CARD':
            return deleteCard(state, action)
        default:
            return state
    }
}

const deleteListId = (state, action) => {
    const { payload : { listId } } = action
    return state.filter(id => id !== listId)
}

const addListId = (state, action) => {
    const { payload : { listId } } = action
    return state.concat(listId)
}

function allLists(state = [], action) {
    switch(action.type){
        case 'ADD_LIST':
            return addListId(state, action)
        case 'DELETE_LIST':
            return deleteListId(state, action)
        default:
            return state
    }
}

const lists = combineReducers({
    byId: listsById,
    // allIds: allLists
})

export default lists;