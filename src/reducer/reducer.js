import { addBoard } from './addBoard'; 
import { initialState } from './initialState';
import { updateLists } from './updateLists';
import { updateListName } from './updateListName';
import { updateCards } from './updateCards';

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
            const { boardId, title, newListId } = action.payload
            const updatedList = updateLists(currentBoard, title, newListId)
            return {
                ...state,
                boards: [
                    ...boards.slice(0, boardId),
                    updatedList,
                    ...boards.slice(boardId + 1)
                ],
                currentBoard: updatedList
            }
        case 'CHANGE_LIST_NAME': {
            const { boardId } = action.payload
            const listWithUpdatedName = updateListName(currentBoard, action.payload)
            return {
                ...state,
                boards: [
                    ...boards.slice(0, boardId),
                    listWithUpdatedName,
                    ...boards.slice(boardId + 1)
                ],
                currentBoard: listWithUpdatedName
            }
        }
        case 'ADD_CARD':
            const { list } = action.payload
            const updatedCard = updateCards(currentBoard, action.payload)
            return {
                ...state,
                boards: [
                    ...boards.slice(0, list.boardId),
                    updatedCard,
                    ...boards.slice(list.boardId + 1)
                ],
                currentBoard: updatedCard
            }
        default:
            return state
    }
}

export default reducer;