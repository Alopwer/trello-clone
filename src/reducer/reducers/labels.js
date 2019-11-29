import { combineReducers } from 'redux'

const changeLabelStatus = (state, action) => {
    const { payload } = action
    const label = state[payload]
    return {
        ...state,
        [payload] : {
            ...label,
            selected : !label.selected
        }
    }
}

const updateLabel = (state, action) => {
    const { payload : { labelId, title, color } } = action
    const label = state[labelId]
    return {
        ...state,
        [labelId] : {
            ...label,
            title,
            color
        }
    }
}

const deleteLabel = (state, action) => {
    const { payload : { labelId } } = action
    const { [labelId] : label, ...withDeletedLabel } = state
    return withDeletedLabel
}

const addLabelEntity = (state, action) => {
    const { payload : { cardId, labelId, title, color } } = action
    return {
        ...state,
        [labelId] : {
            cardId, 
            labelId,
            title,
            color,
            selected : false
        }
    }
}

function labelsById(state = {}, action) {
    switch(action.type){
        case 'ADD_LABEL':
            return addLabelEntity(state, action)
        case 'UPDATE_LABEL':
            return updateLabel(state, action)
        case 'DELETE_LABEL':
            return deleteLabel(state, action)
        case 'CHANGE_LABEL_STATUS':
            return changeLabelStatus(state, action)
        default:
            return state
    }
}

const deleteLabelId = (state, action) => {
    const { payload : { labelId } } = action
    return state.filter(id => id !== labelId)
}

const addLabelId = (state, action) => {
    const { payload : { labelId } } = action
    return state.concat(labelId)
}

function allLabels(state = [], action) {
    switch(action.type){
        case 'ADD_LABEL':
            return addLabelId(state, action)
        case 'DELETE_LABEL':
            return deleteLabelId(state, action)
        default:
            return state
    }
}

const labels = combineReducers({
    byId: labelsById,
    allIds: allLabels
})

export default labels;