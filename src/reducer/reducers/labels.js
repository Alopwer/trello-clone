import { combineReducers } from 'redux'

const addLabelEntity = (state, action) => {
    const { payload : { labelId, title, color } } = action
    return {
        ...state,
        [labelId] : {
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
        default:
            return state
    }
}

const addLabelId = (state, action) => {
    const { payload : { labelId } } = action
    return state.concat(labelId)
}

function allLabels(state = [], action) {
    switch(action.type){
        case 'ADD_LABEL':
            return addLabelId(state, action)
        default:
            return state
    }
}

const labels = combineReducers({
    byId: labelsById,
    allIds: allLabels
})

export default labels;