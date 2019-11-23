import { getModifiedList, getModifiedCard, getModifiedChecklist, getModifiedChecklistItems, getModifiedItems, getModifiedDueDate, getModifiedLabels } from './getModifiedParts';

const updateLists = (currentBoard, payload) => {
    const { title, newListId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists,
            {
                boardId: currentBoard.boardId,
                listId: newListId,
                title,
                cards: []
            }
        ]
    }
}
const updateCards = (currentBoard, payload, del) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedList(currentBoard, payload, del),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateListName = (currentBoard, payload) => {
    const { listId, title } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            {
                ...currentBoard.lists[listId],
                title
            },
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateCardDescr = (currentBoard, payload) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedCard(currentBoard, payload),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateChecklists = (currentBoard, payload, del) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedChecklist(currentBoard, payload, del),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateChecklistItems = (currentBoard, payload) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedChecklistItems(currentBoard, payload),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateItemsStatus = (currentBoard, payload) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedItems(currentBoard, payload),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}
const updateItemsCount = (currentBoard, payload) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedChecklistItems(currentBoard, payload, true),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateDueDate = (currentBoard, payload) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedDueDate(currentBoard, payload),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateLabels = (currentBoard, payload, update = false) => {
    const { listId } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            getModifiedLabels(currentBoard, payload, update),
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}

const updateBoard = (state, action) => {
    if (state === undefined) {
        return {}
    }
    const { boards, currentBoard } = state
    const { payload } = action

    switch(action.type) {
        case 'SET_CURRENT_BOARD':
            return boards.find(board => board.boardId === payload)
        case 'ADD_LIST':
            return updateLists(currentBoard, payload)
        case 'ADD_CARD':
            return updateCards(currentBoard, payload)
        case 'DELETE_CARD':
            return updateCards(currentBoard, payload, true)
        case 'ADD_CHECKLIST':
            return updateChecklists(currentBoard, payload)
        case 'DELETE_CHECKLIST':
            return updateChecklists(currentBoard, payload, true)
        case 'ADD_ITEM':
            return updateChecklistItems(currentBoard, payload)
        case 'CHANGE_LIST_NAME':
            return updateListName(currentBoard, payload)
        case 'UPDATE_CARD_DESCR':
            return updateCardDescr(currentBoard, payload)
        case 'TOGGLE_CHECK_STATUS':
            return updateItemsStatus(currentBoard, payload)
        case 'DELETE_ITEM':
            return updateItemsCount(currentBoard, payload)
        case 'UPDATE_DUE_DATE':
            return updateDueDate(currentBoard, payload)
        case 'CHANGE_DUE_DATE_STATUS': 
            return updateDueDate(currentBoard, payload)
        case 'CREATE_NEW_LABEL':
            return updateLabels(currentBoard, payload)
        case 'UPDATE_LABEL':
            return updateLabels(currentBoard, payload, true)
        case 'DELETE_LABEL':
            return updateLabels(currentBoard, payload, 'delete')
        default: 
            return currentBoard
    }
}

export {
    updateLists,
    updateCards,
    updateListName,
    updateBoard,
    updateCardDescr
}