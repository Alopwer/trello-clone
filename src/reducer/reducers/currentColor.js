const defaultState = 'rgb(1, 79, 125)'

const currentColor = (state = defaultState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_COLOR':
            return action.payload
        case 'SET_DEFAULT_COLOR':
            return defaultState
        default:
            return state
    }
}

export default currentColor;