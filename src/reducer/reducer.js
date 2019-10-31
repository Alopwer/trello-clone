import { addBoard } from './addBoard'; 
import { initialState } from './initialState';
import { addList } from './addList';

const reducer = (state = initialState, action) => {
    const { boards, currentBoard } = state
    switch(action.type) {
        case 'SET_CURRENT_BOARD':
            return {
                ...state,
                currentBoard: boards.find(board => board.id === action.payload)
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
                    ...boards.slice(0, action.payload.id), 
                    addBoard(action.payload)
                ]
            }
        case 'ADD_LIST':
            return {
                ...state,
                boards: [
                    ...boards.slice(0, action.value),
                    addList(currentBoard, action.payload),
                    ...boards.slice(action.value + 1)
                ],
                currentBoard: addList(currentBoard, action.payload),
            }
        default:
            return state
    }
}

export default reducer;