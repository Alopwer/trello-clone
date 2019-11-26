const getList = (payload) => {
    const { listId, newCardId, title } = payload
    return {
        listId,
        cardId: newCardId,
        title,
        descr: '',
        checklists: [],
        dueDate: {
            date: '',
            done: false
        },
        labels: []
    }
}
const getCard = (board, payload) => {
    const { listId, cardId, text } = payload
    return {
        ...board.lists[listId].cards[cardId],
        descr: text
    }
}
const getChecklist = (payload, boardLists, del) => {
    const { cardId, checklistId, title } = payload
    const boardCards = boardLists.cards[cardId]

    return del ? 
        {
            ...boardCards,
            checklists: [
                ...boardCards.checklists.slice(0, checklistId),
                ...boardCards.checklists
                    .map(checklist => Object.assign({}, checklist, {
                        checklistId: checklist.checklistId - 1
                    }))
                    .slice(checklistId + 1)
            ]
        }
            :
        {
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
const getChecklistItems = (payload, boardLists, deleteItem) => {
    const { itemId, cardId, checklistId, title } = payload
    const boardCards = boardLists.cards[cardId]
    const boardItems = boardCards.checklists[checklistId]
    const updatedItems = deleteItem ? 
        [
            ...boardItems.items.slice(0, itemId),
            ...boardItems.items
                .map(item => Object.assign({}, item, {
                    itemId: item.itemId - 1
                }))
                .slice(itemId + 1)
        ]
            :
        [
            ...boardItems.items,
                    {
                        title,
                        done: false,
                        itemId
                    }
        ]
    
    return {
        ...boardCards,
        checklists: [
            ...boardCards.checklists.slice(0, checklistId),
            {   
                ...boardItems,
                items: updatedItems
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

const getDueDate = (payload, boardLists) => {
    const { cardId, value } = payload
    const boardCards = boardLists.cards[cardId]

    if (typeof value === 'string') {
        if (!value) {
            return {
                ...boardCards,
                dueDate : {
                    done: false,
                    date: value
                }
            }
        }
        return {
            ...boardCards,
            dueDate : {
                ...boardCards.dueDate,
                date: value
            }
        }
    }

    return {
        ...boardCards,
        dueDate : {
            ...boardCards.dueDate,
            done: value
        }
    }
}

const getLabels = (payload, boardLists, update) => {
    const { cardId, name, color, labelId, selected } = payload
    const boardCards = boardLists.cards[cardId]
    const label = {
        name,
        color,
        labelId,
        selected
    }
    
    if (update === 'delete') {
        return {
            ...boardCards,
            labels : [
                ...boardCards.labels.slice(0, labelId),
                ...boardCards.labels
                    .map(label => Object.assign({}, label, {
                        labelId: label.labelId - 1
                    }))
                    .slice(labelId + 1)
            ]
        }
    } else if (update) {
        return {
            ...boardCards,
            labels : [
                ...boardCards.labels.slice(0, labelId),
                label,
                ...boardCards.labels.slice(labelId + 1)
            ]
        }
    }

    return {
        ...boardCards,
        labels : [
            ...boardCards.labels,
            label
        ]
    }
}

export {
    getList,
    getCard,
    getChecklist,
    getChecklistItems,
    getItems,
    getDueDate,
    getLabels
}