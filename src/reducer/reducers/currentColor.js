const defaultColor = 'rgb(1, 79, 125)'

const currentColor = (state = defaultColor, action) => {
    switch(action.type) {
        case 'SET_CURRENT_COLOR':
            return action.payload
        case 'SET_DEFAULT_COLOR':
            return defaultColor
        default:
            return state
    }
}

export default currentColor;