import { createStore } from 'redux';
import rootReducer from './reducer/rootReducer';
import { loadState, saveState } from './loadState';

const persistedState = loadState();
  
const store = createStore(rootReducer, persistedState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
    saveState(store.getState());
    console.log(store.getState())
})
export default store;