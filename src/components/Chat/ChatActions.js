import {
  CHAT_MESSAGE_INPUT,
  ALL_CHAT_MESSAGES,
  LOAD_CHAT_SUCCESS,
  LOAD_CHAT_FAILURE,
} from './ChatActionTypes';
import axios from 'axios';

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

export const requestGetMessages = () => {
  return (dispatch, getState) => {
    return axios
      .get('http://localhost:4000/chats')
      .then((response) => {
        console.log(response);
        dispatch({
          type: LOAD_CHAT_SUCCESS,
          payload: response.data.chats,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOAD_CHAT_FAILURE,
        });
      });
  };
};
