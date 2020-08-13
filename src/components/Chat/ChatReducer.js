import {
  CHAT_MESSAGE_INPUT,
  ALL_CHAT_MESSAGES,
  LOAD_CHAT_SUCCESS,
} from './ChatActionTypes';

const initalState = {
  message: '',
  messages: [],
  allMsgs: [],
};

export const ChatReducer = (state = initalState, action) => {
  switch (action.type) {
    case CHAT_MESSAGE_INPUT:
      return {
        ...state,
        message: action.payload,
      };
    case ALL_CHAT_MESSAGES:
      return {
        ...state,
        message: '',
        messages: [...state.messages, action.payload],
      };
    case LOAD_CHAT_SUCCESS:
      return {
        ...state,
        allMsgs: action.payload,
      };
    default:
      return state;
  }
};
