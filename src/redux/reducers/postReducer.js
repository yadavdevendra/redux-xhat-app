import { POST_DATA, SET_DATA, SET_CHAT } from "../action/actiontype";

const initialState = {
  chats: [],
  user:[]

};
function reducer (state = initialState, { type, payload }){
  switch (type) {
    case POST_DATA:
      return {
        ...state,
        chats: [...state.chats, payload],
      };
    case SET_DATA:
      return {
        ...state,
        user: payload,
      };
    case SET_CHAT:
      return {
        ...state,
        chats: payload,
      };
    default:
      return state;
  }
};
export default reducer