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
const getChecklist = (payload, boardLists) => {
    const { cardId, checklistId, title } = payload
    const boardCards = boardLists.cards[cardId]
    return {
        ...boardCards,
        checklists: [
            ...boardCards.checklists,
            {  
                checklistId,
                cardId,
                title,
                items: []
            }
        ]
    }
}
const getChecklistItems = (payload, boardLists) => {
    const { itemId, cardId, checklistId, title } = payload
    const boardCards = boardLists.cards[cardId]
    return {
        ...boardCards,
        checklists: [
            ...boardCards.checklists.slice(0, checklistId),
            {   
                ...boardCards.checklists[checklistId],
                items: [
                    ...boardCards.checklists[checklistId].items,
                    {
                        title,
                        done: false,
                        itemId
                    }
                ]
            },
            ...boardCards.checklists.slice(checklistId + 1)
        ]
    }
}
const getItems = (payload, boardLists) => {
    const { itemId, cardId, checklistId } = payload
    const boardCards = boardLists.cards[cardId]
    const boardChecklists = boardLists.cards[cardId].checklists[checklistId]
    return {
        ...boardCards,
        checklists: [
            ...boardCards.checklists.slice(0, checklistId),
            {   
                ...boardChecklists,
                items: [
                    ...boardChecklists.items.slice(0, itemId),
                    {
                        ...boardChecklists.items[itemId],
                        done: !boardChecklists.items[itemId].done
                    },
                    ...boardChecklists.items.slice(itemId + 1)
                ]
            },
            ...boardCards.checklists.slice(checklistId + 1)
        ]
    }
}

export {
    getList,
    getCard,
    getChecklist,
    getChecklistItems,
    getItems
}