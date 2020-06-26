import { combineReducers } from 'redux';
import {
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems,
    currentColor,
    auth,
    fetchReducer
} from './reducers/index';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const reducer = combineReducers({
    boards,
    lists,
    cards,
    labels,
    checklists,
    checklistItems,
    currentColor,
    auth,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    fetchReducer
})

export default reducer;