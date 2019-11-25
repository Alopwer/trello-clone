import {
    addBoard,
    updateLists,
    updateCards,
    updateListName,
    updateCardDescr,
    updateChecklists,
    updateChecklistItems,
    updateItemsStatus,
    updateItemsCount,
    updateDueDate,
    updateLabels
} from './getData/updateBoardParts';

const updateBoards = (state, action) => {
    if (state === undefined) {
        return []
    }

    const { boards } = state
    const { payload } = action
    const board = payload && boards.find(board => board.boardId === payload.boardId) 

    switch(action.type) {
        case 'ADD_BOARD':
            return [
                ...boards.slice(0, payload.boardId), 
                addBoard(payload)
            ]
        case 'DELETE_BOARD':
            return [
                ...boards.slice(0, payload),
                ...boards
                    .map(bd => Object.assign({}, bd, { 
                        boardId: bd.boardId - 1 
                    }))
                    .slice(payload + 1)
            ]
        case 'ADD_LIST':
            return [
                ...boards.slice(0, payload.boardId),
                updateLists(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'DELETE_LIST':
            return [
                ...boards.slice(0, payload.boardId),
                updateLists(board, payload, true),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'ADD_CARD':
            return [
                ...boards.slice(0, payload.boardId),
                updateCards(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'DELETE_CARD':
            return [
                ...boards.slice(0, payload.boardId),
                updateCards(board, payload, true),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'CHANGE_LIST_NAME':
            return [
                ...boards.slice(0, payload.boardId),
                updateListName(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'ADD_CHECKLIST': 
            return [
                ...boards.slice(0, payload.boardId),
                updateChecklists(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'DELETE_CHECKLIST': 
            return [
                ...boards.slice(0, payload.boardId),
                updateChecklists(board, payload, true),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'ADD_ITEM':
            return [
                ...boards.slice(0, payload.boardId),
                updateChecklistItems(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'UPDATE_CARD_DESCR': 
            return [
                ...boards.slice(0, payload.boardId),
                updateCardDescr(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'TOGGLE_CHECK_STATUS':
            return [
                ...boards.slice(0, payload.boardId),
                updateItemsStatus(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'DELETE_ITEM':
            return [
                ...boards.slice(0, payload.boardId),
                updateItemsCount(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'CHANGE_DUE_DATE_STATUS':
            return [
                ...boards.slice(0, payload.boardId),
                updateDueDate(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'UPDATE_DUE_DATE':
            return [
                ...boards.slice(0, payload.boardId),
                updateDueDate(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'CREATE_NEW_LABEL':
            return [
                ...boards.slice(0, payload.boardId),
                updateLabels(board, payload),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'UPDATE_LABEL':
            return [
                ...boards.slice(0, payload.boardId),
                updateLabels(board, payload, true),
                ...boards.slice(payload.boardId + 1)
            ]
        case 'DELETE_LABEL':
            return [
                ...boards.slice(0, payload.boardId),
                updateLabels(board, payload, 'delete'),
                ...boards.slice(payload.boardId + 1)
            ]
        default: 
            return state.boards
    }
}

export { updateBoards }