import { updateBoards } from './boards';
import { updateColor } from './current-color';

const reducer = (state, action) => {
    return {
        boards: updateBoards(state, action),
        currentColor: updateColor(action)
    }
}

export default reducer;