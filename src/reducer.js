const initialState = {
    boards: [
        {
            id: '1',
            title: 'New board',
            cover: 'rgb(176, 70, 50)'
        },
        {
            id: '2',
            title: 'Test board',
            cover: 'rgb(81, 152, 57)'
        },
        {
            id: '3',
            title: 'Test board',
            cover: 'rgb(0, 174, 204)'
        },
        {
            id: '4',
            title: 'Test board',
            cover: 'rgb(0, 174, 204)'
        },
        {
            id: '5',
            title: 'Test board',
            cover: 'rgb(0, 174, 204)'
        }
    ],
    currentBoard: {

    },
    currentColor: 'rgb(0, 121, 191)'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_BOARD':
            return {
                ...state,
                currentBoard: state.boards.find(board => board.id === action.payload)
            }
        case 'SET_CURRENT_COLOR':
            return {
                ...state,
                currentColor: action.payload
            }
        default:
            return state
    }
}

export default reducer;