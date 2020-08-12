import { CHAT_MESSAGE_INPUT, ALL_CHAT_MESSAGES } from './ChatActionTypes';

export const chatMsgInput = (e) => {
  return {
    type: CHAT_MESSAGE_INPUT,
    payload: e,
  };
};

export const fullChatMsgs = (e) => {
  return (dispatch) => {
    dispatch({
      type: ALL_CHAT_MESSAGES,
      payload: e,
    });
  };
};
