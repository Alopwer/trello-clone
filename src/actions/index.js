const setCurrentBoard = (boardId) => {
    return {
        type: 'SET_CURRENT_BOARD',
        payload: boardId
    }
}

const setCurrentColor = (color) => {
    return {
        type: 'SET_CURRENT_COLOR',
        payload: color
    }
}

const addBoard = (board) => {
    return {
        type: 'ADD_BOARD',
        payload: board
    }
}

const addList = (value) => {
    const { title, boardId, newListId } = value
    return {
        type: 'ADD_LIST',
        payload: {title, boardId, newListId}
    }
}

const addCard = (value) => {
    const { title, list, newCardId } = value
    return {
        type: 'ADD_CARD',
        payload: { title, list, newCardId }
    }
}

const changeListName = (value) => {    
    const { title, boardId, listId } = value
    return {
        type: 'CHANGE_LIST_NAME',
        payload: {
            title,
            boardId,
            listId
        }
    }
}

const updateCardDescr = (value) => {
    const { boardId, listId, cardId, text } = value
    return {
        type: 'UPDATE_CARD_DESCR',
        payload: { boardId, listId, cardId, text }
    }
}

const addChecklist = (value) => {
    const { boardId, listId, cardId, title } = value
    return {
        type: 'ADD_CHECKLIST',
        payload: { boardId, listId, cardId, title }
    }
}

export {
    setCurrentBoard,
    setCurrentColor,
    addBoard,
    addList,
    addCard,
    addChecklist,
    changeListName,
    updateCardDescr
}