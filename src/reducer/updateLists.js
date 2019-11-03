export const updateLists = (currentBoard, title, listId) => {
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists,
            {
                boardId: currentBoard.id,
                listId,
                title,
                cards: []
            }
        ]
    }
}