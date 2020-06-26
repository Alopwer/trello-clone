const initialState = {
    isFetching: false
}

const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCHING_SUCCESS':
            return {
                ...state,
                isFetching: false
            }
        case 'FETCHING':
            return {
                ...state,
                isFetching: true
            }
        default:
            return state
    }
}

export default fetchReducer