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
                        listId: list.listId,
                        cardId: newCardId,
                        title,
                        descr: '',
                        checklists: []
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
                ...currentBoard.lists[listId].cards,
                boardId,
                listId,
                title
            },
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateCardDescr = (currentBoard, payload) => {
    const { listId, text, cardId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            {
                ...currentBoard.lists[listId],
                cards: [
                    ...currentBoard.lists[listId].cards.slice(0, cardId),
                    {
                        ...currentBoard.lists[listId].cards[cardId],
                        descr: text
                    },
                    ...currentBoard.lists[listId].cards.slice(cardId + 1),
                ]
            },
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateChecklists = (currentBoard, payload) => {
    const { listId, title, cardId } = payload
    console.log(currentBoard.lists[listId].cards[cardId])
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            {
                ...currentBoard.lists[listId],
                cards: [
                    ...currentBoard.lists[listId].cards.slice(0, cardId),
                    {
                        ...currentBoard.lists[listId].cards[cardId],
                        checklists: [
                            ...currentBoard.lists[listId].cards[cardId].checklists,
                            {
                                title,
                                items: []
                            }
                        ]
                    },
                    ...currentBoard.lists[listId].cards.slice(cardId + 1),
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
        case 'ADD_CHECKLIST': 
            return [
                ...boards.slice(0, action.payload.boardId),
                updateChecklists(currentBoard, action.payload),
                ...boards.slice(action.payload.boardId + 1)
            ]
        case 'UPDATE_CARD_DESCR': 
            return [
                ...boards.slice(0, action.payload.boardId),
                updateCardDescr(currentBoard, action.payload),
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
        case 'ADD_CHECKLIST':
            return updateChecklists(currentBoard, action.payload)
        case 'CHANGE_LIST_NAME':
            return updateListName(currentBoard, action.payload)
        case 'UPDATE_CARD_DESCR':
            return updateCardDescr(currentBoard, action.payload)
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
    updateBoard,
    updateCardDescr
}