export const setCurrentBoard = (boardId) => {
    return {
        type: 'SET_CURRENT_BOARD',
        payload: boardId
    }
}