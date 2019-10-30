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