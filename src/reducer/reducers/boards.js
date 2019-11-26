import { combineReducers } from 'redux';

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
    const { [payload]: board, ...withDeletedBoard } = state
    return withDeletedBoard
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
        [boardId] : { boardId, title, cover, lists : [] }
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

const addBoardId = (state, action) => {
    const { payload : { boardId } } = action
    return state.concat(boardId)
}

const allBoards = (state = [], action) => {
    switch(action.type){
        case 'ADD_BOARD':
            return addBoardId(state, action)
        default:
            return state
    }
}

const boards = combineReducers({
    byId: boardsById,
    allIds: allBoards
})

export default boards;