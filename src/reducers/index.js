import { combineReducers } from "redux";

//import data from "./dataReducer";
import {user} from "./authReducer";

export default combineReducers({
  //data,
  user
});