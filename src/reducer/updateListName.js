export const updateListName = (currentBoard, payload) => {
    const { boardId, listId, title } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, listId),
            {
                boardId,
                listId,
                title,
                cards: [
                    ...currentBoard.lists[listId].cards
                ]
            },
            ...currentBoard.lists.slice(listId + 1),
        ]
    }
}