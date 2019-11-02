export const updateListName = (currentBoard, title, id, bdid) => {
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists.slice(0, id),
            {
                bdId: bdid,
                listId: id,
                title,
                ...currentBoard.lists[id].cards
            },
            ...currentBoard.lists.slice(id + 1),
        ]
    }
}