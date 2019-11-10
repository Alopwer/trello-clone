const getList = (payload) => {
    const { listId, newCardId, title } = payload
    return {
        listId,
        cardId: newCardId,
        title,
        descr: '',
        checklists: []
    }
}
const getCard = (board, payload) => {
    const { listId, cardId, text } = payload
    return {
        ...board.lists[listId].cards[cardId],
        descr: text
    }
}
const getChecklist = (board, payload) => {
    const { listId, cardId, checklistId, title } = payload
    return {
        ...board.lists[listId].cards[cardId],
        checklists: [
            ...board.lists[listId].cards[cardId].checklists,
            {  
                checklistId,
                cardId,
                title,
                items: []
            }
        ]
    }
}
const getChecklistItems = (board, payload) => {
    const { listId, cardId, checklistId, title } = payload
    return {
        ...board.lists[listId].cards[cardId],
        checklists: [
            ...board.lists[listId].cards[cardId].checklists.slice(0, checklistId),
            {   
                ...board.lists[listId].cards[cardId].checklists[checklistId],
                items: [
                    ...board.lists[listId].cards[cardId].checklists[checklistId].items,
                    {
                        title,
                        done: false
                    }
                ]
            },
            ...board.lists[listId].cards[cardId].checklists.slice(checklistId + 1)
        ]
    }
}

export {
    getList,
    getCard,
    getChecklist,
    getChecklistItems
}