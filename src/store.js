import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/rootReducer';
import { loadState, saveState } from './loadState';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';

const persistedState = loadState();
  
const store = createStore(rootReducer, persistedState, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
        reduxFirestore(firebase, firebaseConfig),
    )
)

// store.subscribe(()=>{
//     saveState(store.getState());
// })
export default store;