const addBoard = (payload) => {
    const { id, title, cover } = payload
    return {   
        id,
        title,
        cover,
        lists: []
    }
}
const updateLists = (currentBoard, title, listId) => {
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists,
            {
                boardId: currentBoard.id,
                listId,
                title,
                cards: []
            }
        ]
    }
}
const updateCards = (currentBoard, payload) => {
    const { title, newCardId, list } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, list.listId),
            {
                boardId: list.boardId,
                listId: list.listId,
                title: list.title,
                cards: [
                    ...currentBoard.lists[list.listId].cards,
                    {
                        cardId: newCardId,
                        title
                    }
                ]
            },
            ...currentBoard.lists.slice(list.listId + 1),
        ]
    }
}

const updateListName = (currentBoard, payload) => {
    const { boardId, listId, title } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            {
                boardId,
                listId,
                title,
                cards: [
                    ...currentBoard.lists[listId].cards
                ]
            },
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateBoards = (state, action) => {
    if (state === undefined) {
        return []
    }

    const { boards, currentBoard } = state

    switch(action.type) {
        case 'ADD_BOARD':
            return [
                ...boards.slice(0, action.payload.id), 
                addBoard(action.payload)
            ]
        case 'ADD_LIST':
            const { boardId, newListId, title } = action.payload
            return [
                ...boards.slice(0, boardId),
                updateLists(currentBoard, title, newListId),
                ...boards.slice(boardId + 1)
            ]
        case 'ADD_CARD':
                const { list } = action.payload
            return [
                ...boards.slice(0, list.boardId),
                updateCards(currentBoard, action.payload),
                ...boards.slice(list.boardId + 1)
            ]
        case 'CHANGE_LIST_NAME':
                // const { boardId } = action.payload
            return [
                ...boards.slice(0, action.payload.boardId),
                updateListName(currentBoard, action.payload),
                ...boards.slice(action.payload.boardId + 1)
            ]
        default: 
            return state.boards
    }
}

const updateBoard = (state, action) => {
    if (state === undefined) {
        return {}
    }
    const { boards, currentBoard } = state

    switch(action.type) {
        case 'SET_CURRENT_BOARD':
            return boards.find(board => board.id === action.payload)
        case 'ADD_LIST':
            const { newListId, title } = action.payload
            return updateLists(currentBoard, title, newListId)
        case 'ADD_CARD':
            return updateCards(currentBoard, action.payload)
        case 'CHANGE_LIST_NAME':
            return updateListName(currentBoard, action.payload)
        default: 
            return state.currentBoard
    }
}

export {
    addBoard,
    updateLists,
    updateCards,
    updateListName,
    updateBoards,
    updateBoard
}