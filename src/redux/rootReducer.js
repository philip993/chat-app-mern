import { combineReducers } from 'redux';

// Import Reducers
import { ChatReducer } from '../components/Chat/ChatReducer';

const rootReducer = combineReducers({
  ChatReducer,
});

export default rootReducer;
