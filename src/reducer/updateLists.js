export const updateLists = (currentBoard, title, lsId) => {
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists,
            {
                bdId: currentBoard.id,
                listId: lsId,
                title,
                cards: []
            }
        ]
    }
}