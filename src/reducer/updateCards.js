export const updateCards = (currentBoard, payload) => {
    const { title, newCardId, list } = payload
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, list.listId),
            {
                boardId: list.boardId,
                listId: list.listId,
                title: list.title,
                cards: [
                    ...currentBoard.lists[list.listId].cards,
                    {
                        cardId: newCardId,
                        title
                    }
                ]
            },
            ...currentBoard.lists.slice(list.listId + 1),
        ]
    }
}