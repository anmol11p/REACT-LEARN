import { createStore } from "redux";
import rootReducer from "./Reducer/Index";

// Creating the store with Redux DevTools integration (if available)
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

export default store;
