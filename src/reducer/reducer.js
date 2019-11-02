import { addBoard } from './addBoard'; 
import { initialState } from './initialState';
import { updateLists } from './updateLists';
import { updateListName } from './updateListName';

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
                    ...boards.slice(0, action.value.boardId),
                    updateLists(currentBoard, action.payload, action.value.newId),
                    ...boards.slice(action.value.boardId + 1)
                ],
                currentBoard: updateLists(currentBoard, action.payload, action.value.newId),
            }
        case 'CHANGE_LIST_NAME': {
            return {
                ...state,
                boards: [
                    ...boards.slice(0, action.boardId),
                    updateListName(currentBoard, action.listTitle, action.listId, action.boardId),
                    ...boards.slice(action.boardId + 1)
                ],
                currentBoard: updateListName(currentBoard, action.listTitle, action.listId, action.boardId)
            }
        }
        default:
            return state
    }
}

export default reducer;