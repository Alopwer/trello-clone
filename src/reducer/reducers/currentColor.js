<<<<<<< HEAD
const defaultState = 'rgb(1, 79, 125)'

const currentColor = (state = defaultState, action) => {
=======
const defaultColor = 'rgb(1, 79, 125)'

const currentColor = (state = defaultColor, action) => {
>>>>>>> 90abfba32158bd2ad713bb11683929fbd4127ef0
    switch(action.type) {
        case 'SET_CURRENT_COLOR':
            return action.payload
        case 'SET_DEFAULT_COLOR':
<<<<<<< HEAD
            return defaultState
=======
            return defaultColor
>>>>>>> 90abfba32158bd2ad713bb11683929fbd4127ef0
        default:
            return state
    }
}

export default currentColor;