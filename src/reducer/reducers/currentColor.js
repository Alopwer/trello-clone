const currentColor = (state = '1, 79, 125', action) => {
    switch(action.type) {
        case 'SET_CURRENT_COLOR':
            return action.payload
        default:
            return state
    }
}

export default currentColor;