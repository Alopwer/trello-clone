const deleteList = (state, action) => {
    const { payload : { listId, boardId } } = action
    const board = state[boardId]
    return {
        ...state,
        [boardId] : {
            ...board,
            lists : board.lists.filter(id => id !== listId)
        }
    }
}

const deleteBoard = (state, action) => {
    const { payload } = action
    const { [payload]: board, ...withoutDeletedBoard } = state
    return withoutDeletedBoard
}

const addList = (state, action) => {
    const { payload : { boardId, listId } } = action
    const board = state[boardId]
    return {
        ...state, 
        [boardId] : {
            ...board,
            lists: board.lists.concat(listId)
        }
    }
}

const addBoardEntity = (state, action) => {
    const { payload : { title, boardId, cover } } = action
    return {
        ...state,
        [boardId] : { title, cover, lists : [] }
    }
}

const boardsById = (state = {}, action) => {
    switch(action.type){
        case 'ADD_BOARD':
            return addBoardEntity(state, action)
        case 'ADD_LIST':
            return addList(state, action)
        case 'DELETE_BOARD':
            return deleteBoard(state, action)
        case 'DELETE_LIST':
            return deleteList(state, action)
        default:
            return state
    }
}

const boards = {
    byId: boardsById
}

export default boards;