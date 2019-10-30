const initialState = {
    boards: [
        {
            id: 1,
            title: 'New board',
            cover: 'rgb(176, 70, 50)'
        },
        {
            id: 2,
            title: 'Test board',
            cover: 'rgb(81, 152, 57)'
        },
        {
            id: 3,
            title: 'Test board',
            cover: 'rgb(0, 174, 204)'
        }
    ],
    currentBoard: {},
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
        case 'ADD_BOARD':
            return {
                ...state,
                boards : [
                    ...state.boards.slice(0, action.payload.id), 
                    {   
                        id: action.payload.id,
                        title: action.payload.title,
                        cover: action.payload.cover
                    }
                ]
            }
        default:
            return state
    }
}

export default reducer;