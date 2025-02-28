// Store/store.js
import { createStore } from 'redux'; // Import createStore from redux
import rootReducer from '../Reducers'; // Import your combined reducers

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
);

export default store;
