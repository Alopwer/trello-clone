import { getList, getCard, getChecklist, getChecklistItems } from "./getParts"

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
    return {
        ...board.lists[listId],
        cards: [
            ...board.lists[listId].cards.slice(0, cardId),
            getChecklist(board, payload),
            ...board.lists[listId].cards.slice(cardId + 1),
        ]
    }
}
const getModifiedChecklistItems = (board, payload) => {
    const { listId, cardId } = payload
    return {
        ...board.lists[listId],
        cards: [
            ...board.lists[listId].cards.slice(0, cardId),
            getChecklistItems(board, payload),
            ...board.lists[listId].cards.slice(cardId + 1),
        ]
    }
}

export {
    getModifiedList,
    getModifiedCard,
    getModifiedChecklist,
    getModifiedChecklistItems
}