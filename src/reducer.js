const initialState = {
    boards: [
        {
            id: '1',
            title: 'New board',
            cover: 'red'
        },
        {
            id: '2',
            title: 'Test board',
            cover: 'blue'
        }
    ],
    currentBoard: {

    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_BOARD':
            return {
                ...state,
                currentBoard: state.boards.find(board => board.id === action.payload)
            }
        default:
            return state
    }
}

export default reducer;