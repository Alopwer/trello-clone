import { combineReducers } from 'redux'

const deleteChecklistItem = (state, action) => {
    const { payload : { checklistId, checklistItemId } } = action
    const checklist = state[checklistId]
    return {
        ...state,
        [checklistId] : {
            ...checklist,
            items : checklist.items.filter(id => id !== checklistItemId)
        }
    }
}

const deleteChecklist = (state, action) => {
    const { payload : { checklistId } } = action
    const { [checklistId]: checklist, ...withDeletedChecklist } = state
    return withDeletedChecklist
}

const addItem = (state, action) => {
    const { payload : { checklistId, itemId } } = action
    const checklist = state[checklistId]

    return {
        ...state,
        [checklistId] : {
            ...checklist,
            items : checklist.items.concat(itemId)
        }
    }
}

const addChecklistEntity = (state, action) => {
    const { payload : { cardId, checklistId, title } } = action
    return {
        ...state,
        [checklistId] : {
            cardId,
            checklistId,
            title,
            items : []
        }
    }
}

function checklistsById(state = {}, action) {
    switch(action.type){
        case 'ADD_CHECKLIST':
            return addChecklistEntity(state, action)
        case 'ADD_CHECKLIST_ITEM':
            return addItem(state, action)
        case 'DELETE_CHECKLIST':
            return deleteChecklist(state, action)
        case 'DELETE_CHECKLIST_ITEM':
            return deleteChecklistItem(state, action)
        default:
            return state
    }
}

const deleteChecklistId = (state, action) => {
    const { payload : { checklistId } } = action
    return state.filter(id => id !== checklistId)
}

const addChecklistId = (state, action) => {
    const { payload : { checklistId } } = action
    return state.concat(checklistId)
}

function allChecklists(state = [], action) {
    switch(action.type){
        case 'ADD_CHECKLIST':
            return addChecklistId(state, action)
        case 'DELETE_CHECKLIST':
            return deleteChecklistId(state, action)
        default:
            return state
    }
}

const checklists = combineReducers({
    byId: checklistsById,
    allIds: allChecklists
})

export default checklists;