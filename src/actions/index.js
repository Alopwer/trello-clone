export const setCurrentBoard = (boardId) => {
    return {
        type: 'SET_CURRENT_BOARD',
        payload: boardId
    }
}

export const setCurrentColor = (color) => {
    return {
        type: 'SET_CURRENT_COLOR',
        payload: color
    }
}

export const addBoard = (board) => {
    return {
        type: 'ADD_BOARD',
        payload: board
    }
}

export const addList = (title, boardId, newId) => {
    return {
        type: 'ADD_LIST',
        payload: title,
        value: {boardId, newId}
    }
}

export const changeListName = (title, listId, boardId) => {
    return {
        type: 'CHANGE_LIST_NAME',
        listTitle: title,
        listId,
        boardId
    }
}