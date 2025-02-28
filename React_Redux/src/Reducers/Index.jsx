// rootReducer.js
import { combineReducers } from "redux";
import changeTheNumber from "./UpDown";
import TodoList from "./TodoReducer";

const rootReducer = combineReducers({
  changeTheNumber,TodoList
});  // combine all the reducers

export default rootReducer;  // now this is a reducer which has all the data of the application
