import { combineReducers } from 'redux';

// import { updateBoards } from './boards';
// import { updateColor } from './current-color';

import {
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems
} from './reducers/index';

// const reducer = (state, action) => {
//     return {
//         boards: updateBoards(state, action),
//         currentColor: updateColor(action)
//     }
// }

const reducer = combineReducers({
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems
})

export default reducer;