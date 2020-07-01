import { createStore } from "redux";
import rootReducer from "./rootReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (x) => x;

const store = createStore(rootReducer, enhancer);

export default store;