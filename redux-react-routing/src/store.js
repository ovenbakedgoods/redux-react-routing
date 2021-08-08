import { combineReducers } from "redux";
import { createStore } from "redux";
import HomePage from "./components/HomePage"



const reducers = combineReducers({HomePage})



export default createStore(reducers);