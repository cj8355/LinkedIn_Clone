import { createStore, applyMiddleware } from "redux";
import thunkkMiddleware from "redux-thunk";
import rootReducer from "../reducers";


const store = createStore(rootReducer, applyMiddleware(thunkkMiddleware));

export default store;