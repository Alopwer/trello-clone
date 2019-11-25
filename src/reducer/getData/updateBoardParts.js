import { 
    getModifiedList, 
    getModifiedCard, 
    getModifiedChecklist, 
    getModifiedChecklistItems, 
    getModifiedItems, 
    getModifiedDueDate, 
    getModifiedLabels 
} from './getModifiedParts';

const addBoard = (payload) => {
    const { boardId, title, cover } = payload
    return {   
        boardId,
        title,
        cover,
        lists: []
    }
}
const updateLists = (currentBoard, payload, del) => {
    const { title, newListId, listId } = payload

    if (del) {
        return {
            ...currentBoard,
            lists: [
                ...currentBoard.lists.slice(0, listId),
                ...currentBoard.lists
                    .map(list => Object.assign({}, list, {
                        listId: list.listId - 1
                    }))
                    .slice(listId + 1)
            ]
        }
    }

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

export {
    addBoard,
    updateLists,
    updateCards,
    updateListName,
    updateCardDescr,
    updateChecklists,
    updateChecklistItems,
    updateItemsStatus,
    updateItemsCount,
    updateDueDate,
    updateLabels
}