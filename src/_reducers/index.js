import { combineReducers } from "redux";
import AddSumReducer from "./AddSumReducer";
import MultiDiviReducer from "./MultiDiviReducer";




export default combineReducers({
    AddSumReducer : AddSumReducer,
    MultiDiviReducer : MultiDiviReducer
})