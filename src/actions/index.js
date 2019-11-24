const setCurrentBoard = (boardId) => ({
    type: 'SET_CURRENT_BOARD',
    payload: boardId
})

const setCurrentColor = (color) => ({
    type: 'SET_CURRENT_COLOR',
    payload: color
})

const addBoard = (board) => ({
    type: 'ADD_BOARD',
    payload: board
})

const deleteBoard = (board) => ({
    type: 'DELETE_BOARD',
    payload: board
})

const addList = (value) => ({
    type: 'ADD_LIST',
    payload: value
})

const deleteList = (value) => ({
    type: 'DELETE_LIST',
    payload: value
})

const addCard = (value) => ({
    type: 'ADD_CARD',
    payload: value
})

const deleteCard = (value) => ({
    type: 'DELETE_CARD',
    payload: value
})

const changeListName = (value) => ({    
    type: 'CHANGE_LIST_NAME',
    payload: value
})

const updateCardDescr = (value) => ({
    type: 'UPDATE_CARD_DESCR',
    payload: value
})

const addChecklist = (value) => ({
    type: 'ADD_CHECKLIST',
    payload: value
})

const deleteChecklist = (value) => ({
    type: 'DELETE_CHECKLIST',
    payload: value
})

const addItemToList = (value) => ({
    type: 'ADD_ITEM',
    payload: value
})

const toggleCheckStatus = (value) => ({
    type: 'TOGGLE_CHECK_STATUS',
    payload: value
})

const deleteItem = (value) => ({
    type: 'DELETE_ITEM',
    payload: value
})

const updateDueDate = (value) => ({
    type: 'UPDATE_DUE_DATE',
    payload: value
})

const changeDateStatus = (value) => ({
    type: 'CHANGE_DUE_DATE_STATUS',
    payload: value
})

const createNewLabel = (value) => ({
    type: 'CREATE_NEW_LABEL',
    payload: value
})

const modifiedLabelSave = (value) => ({
    type: 'UPDATE_LABEL',
    payload: value
})

const labelDelete = (value) => ({
    type: 'DELETE_LABEL',
    payload: value
})

export {
    setCurrentBoard,
    setCurrentColor,
    addBoard,
    deleteBoard,
    addList,
    deleteList,
    addCard,
    deleteCard,
    addChecklist,
    deleteChecklist,
    addItemToList,
    changeListName,
    updateCardDescr,
    toggleCheckStatus,
    deleteItem,
    updateDueDate,
    changeDateStatus,
    createNewLabel,
    modifiedLabelSave,
    labelDelete
}