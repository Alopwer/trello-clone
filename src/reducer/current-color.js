export const updateColor = (action) => {
    switch(action.type){
        case 'SET_CURRENT_COLOR': 
            return action.payload
        default:
            return'rgb(0, 121, 191)'
    }
}
