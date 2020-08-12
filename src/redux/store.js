import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Enable Redux DeVtools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// Use mulitple middlewares
const middlewares = [thunk, logger];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
// Create store
const store = createStore(rootReducer, enhancer);

export default store;
