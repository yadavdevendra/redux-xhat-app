import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { withReduxStateSync } from 'redux-state-sync';
const rootReducer = combineReducers({
  chats: postReducer,
});

export default withReduxStateSync(rootReducer);



// export default combineReducers({
//   chats: postReducer,
// });
