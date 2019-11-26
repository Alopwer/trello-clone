import { combineReducers } from 'redux'

const addChecklistItemEntity = (state, action) => {
    const { payload : { checklistItemId, title } } = action
    return {
        ...state,
        [checklistItemId] : {
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
        default:
            return state
    }
}

const addChecklistItemId = (state, action) => {
    const { payload : { checklistItemId } } = action
    return state.concat(checklistItemId)
}

function allChecklistItems(state = [], action) {
    switch(action.type){
        case 'ADD_CHECKLIST_ITEM':
            return addChecklistItemId(state, action)
        default:
            return state
    }
}

const checklistItems = combineReducers({
    byId: checklistItemsById,
    allIds: allChecklistItems
})

export default checklistItems;
