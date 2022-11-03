import { createStore, applyMiddleware } from "redux";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

import rootReducer from "./redux/reducers";


const config = {
  // TOGGLE_TODO will not be triggered in other tabs
  blacklist: ["TOGGLE_TODO"],
};
const middlewares = [createStateSyncMiddleware(config)];
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));
initMessageListener(store);
export default store;
