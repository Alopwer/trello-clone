import { combineReducers } from 'redux'

const toggleCheckStatus = (state, action) => {
    const { payload : { checklistItemId } } = action
    const checklistItem = state[checklistItemId]
    return {
        ...state,
        [checklistItemId]: {
            ...checklistItem,
            done : !checklistItem.done
        }
    }
}

const deleteChecklistItem = (state, action) => {
    const { payload : { checklistItemId } } = action
    const { [checklistItemId]: item, ...withDeletedChecklistItem } = state
    return withDeletedChecklistItem
}

const addChecklistItemEntity = (state, action) => {
    const { payload : { checklistId, checklistItemId, title } } = action
    return {
        ...state,
        [checklistItemId] : {
            checklistId,
            checklistItemId,
            title,
            done : false
        }
    }
}

function checklistItemsById(state = {}, action) {
    switch(action.type){
        case 'ADD_CHECKLIST_ITEM':
            return addChecklistItemEntity(state, action)
        case 'DELETE_CHECKLIST_ITEM':
            return deleteChecklistItem(state, action)
        case 'TOGGLE_CHECK_STATUS':
            return toggleCheckStatus(state, action)
        default:
            return state
    }
}

const deleteChecklistItemId = (state, action) => {
    const { payload : { checklistItemId } } = action
    return state.filter(id => id !== checklistItemId)
}

const addChecklistItemId = (state, action) => {
    const { payload : { checklistItemId } } = action
    return state.concat(checklistItemId)
}

function allChecklistItems(state = [], action) {
    switch(action.type){
        case 'ADD_CHECKLIST_ITEM':
            return addChecklistItemId(state, action)
        case 'DELETE_CHECKLIST_ITEM':
            return deleteChecklistItemId(state, action)
        default:
            return state
    }
}

const checklistItems = combineReducers({
    byId: checklistItemsById,
    allIds: allChecklistItems
})

export default checklistItems;
