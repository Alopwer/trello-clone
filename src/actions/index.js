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
    return {
        type: 'ADD_LIST',
        payload: value
    }
}

const addCard = (value) => {
    return {
        type: 'ADD_CARD',
        payload: value
    }
}

const changeListName = (value) => {    
    return {
        type: 'CHANGE_LIST_NAME',
        payload: value
    }
}

const updateCardDescr = (value) => {
    return {
        type: 'UPDATE_CARD_DESCR',
        payload: value
    }
}

const addChecklist = (value) => {
    return {
        type: 'ADD_CHECKLIST',
        payload: value
    }
}

const addItemToList = (value) => {
    return {
        type: 'ADD_ITEM',
        payload: value
    }
}

export {
    setCurrentBoard,
    setCurrentColor,
    addBoard,
    addList,
    addCard,
    addChecklist,
    addItemToList,
    changeListName,
    updateCardDescr
}