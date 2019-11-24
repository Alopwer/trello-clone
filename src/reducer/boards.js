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
        case 'DELETE_BOARD':
            console.log(payload)
            return [
                ...boards.slice(0, payload),
                ...boards
                    .map(bd => Object.assign({}, bd, { 
                        boardId: bd.boardId - 1 
                    }))
                    .slice(payload + 1)
            ]
        case 'ADD_LIST':
        case 'DELETE_LIST':
        case 'ADD_CARD':
        case 'DELETE_CARD':
        case 'CHANGE_LIST_NAME':
        case 'ADD_CHECKLIST': 
        case 'DELETE_CHECKLIST': 
        case 'ADD_ITEM':
        case 'UPDATE_CARD_DESCR': 
        case 'TOGGLE_CHECK_STATUS':
        case 'DELETE_ITEM':
        case 'CHANGE_DUE_DATE_STATUS':
        case 'CREATE_NEW_LABEL':
        case 'UPDATE_LABEL':
        case 'DELETE_LABEL':
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