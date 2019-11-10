import { updateBoard } from './board';
import { updateBoards } from './boards';
import { updateColor } from './current-color';

const reducer = (state, action) => {
    const updated = updateBoard(state, action)
    return {
        currentBoard: updated,
        boards: updateBoards(state, action, updated),
        currentColor: updateColor(action)
    }
}

export default reducer;