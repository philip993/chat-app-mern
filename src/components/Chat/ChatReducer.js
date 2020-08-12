import { CHAT_MESSAGE_INPUT, ALL_CHAT_MESSAGES } from './ChatActionTypes';

const initalState = {
  message: '',
  messages: [],
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
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};
