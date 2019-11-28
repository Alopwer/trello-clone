import { combineReducers } from 'redux';
import {
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems,
    currentColor
} from './reducers/index';

const reducer = combineReducers({
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems,
    currentColor
})

export default reducer;