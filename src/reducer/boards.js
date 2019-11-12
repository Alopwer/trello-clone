const addBoard = (payload) => {
    const { boardId, title, cover } = payload
    return {   
        boardId,
        title,
        cover,
        lists: []
    }
}

const updateBoards = (state, action, current) => {
    if (state === undefined) {
        return []
    }

    const { boards } = state
    const { payload } = action

    switch(action.type) {
        case 'ADD_BOARD':
            return [
                ...boards.slice(0, payload.boardId), 
                addBoard(payload)
            ]
        case 'ADD_LIST':
        case 'ADD_CARD':
        case 'CHANGE_LIST_NAME':
        case 'ADD_CHECKLIST': 
        case 'ADD_ITEM':
        case 'UPDATE_CARD_DESCR': 
        case 'TOGGLE_CHECK_STATUS':
            return [
                ...boards.slice(0, payload.boardId),
                current,
                ...boards.slice(payload.boardId + 1)
            ]
        default: 
            return state.boards
    }
}

export { updateBoards };