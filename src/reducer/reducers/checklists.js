import { combineReducers } from 'redux'

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
    const { payload : { checklistId, title } } = action
    return {
        ...state,
        [checklistId] : {
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
        default:
            return state
    }
}

const addChecklistId = (state, action) => {
    const { payload : { checklistId } } = action
    return state.concat(checklistId)
}

function allChecklists(state = [], action) {
    switch(action.type){
        case 'ADD_CHECKLIST':
            return addChecklistId(state, action)
        default:
            return state
    }
}

const checklists = combineReducers({
    byId: checklistsById,
    allIds: allChecklists
})

export default checklists;