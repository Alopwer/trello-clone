import { getList, getCard, getChecklist, getChecklistItems, getItems, getDueDate } from "./getParts"

const getModifiedList = (board, payload) => {
    const { listId } = payload
    return {
        ...board.lists[listId],
        cards: [
            ...board.lists[listId].cards,
            getList(payload)
        ]
    }
}
const getModifiedCard = (board, payload) => {
    const { listId, cardId } = payload
    return {
        ...board.lists[listId],
        cards: [
            ...board.lists[listId].cards.slice(0, cardId),
            getCard(board, payload),
            ...board.lists[listId].cards.slice(cardId + 1),
        ]
    }
}
const getModifiedChecklist = (board, payload) => {
    const { listId, cardId } = payload
    const boardLists = board.lists[listId]
    return {
        ...boardLists,
        cards: [
            ...boardLists.cards.slice(0, cardId),
            getChecklist(payload, boardLists),
            ...boardLists.cards.slice(cardId + 1),
        ]
    }
}
const getModifiedChecklistItems = (board, payload, deleteItem) => {
    const { listId, cardId } = payload
    const boardLists = board.lists[listId]
    return {
        ...boardLists,
        cards: [
            ...boardLists.cards.slice(0, cardId),
            getChecklistItems(payload, boardLists, deleteItem),
            ...boardLists.cards.slice(cardId + 1),
        ]
    }
}
const getModifiedItems = (board, payload) => {
    const { listId, cardId } = payload
    const boardLists = board.lists[listId]
    return {
        ...boardLists,
        cards: [
            ...boardLists.cards.slice(0, cardId),
            getItems(payload, boardLists),
            ...boardLists.cards.slice(cardId + 1),
        ]
    }
}

const getModifiedDueDate = (board, payload) => {
    const { listId, cardId } = payload
    const boardLists = board.lists[listId]
    return {
        ...boardLists,
        cards: [
            ...boardLists.cards.slice(0, cardId),
            getDueDate(payload, boardLists),
            ...boardLists.cards.slice(cardId + 1),
        ]
    }
}

export {
    getModifiedList,
    getModifiedCard,
    getModifiedChecklist,
    getModifiedChecklistItems,
    getModifiedItems,
    getModifiedDueDate
}