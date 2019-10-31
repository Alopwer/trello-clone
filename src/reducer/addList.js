export const addList = (currentBoard, payload) => {
    return {
        ...currentBoard,
        lists: [
            ...currentBoard.lists,
            {
                title: payload,
                cards: [
                    {
                        ...currentBoard.lists.cards
                    }
                ]
            }
        ]
    }
}