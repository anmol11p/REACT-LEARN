import { createStore } from "redux"; // Corrected import
import rootReducer from "../Reducer/Index"; // Ensure this path is correct

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);

export default store;
