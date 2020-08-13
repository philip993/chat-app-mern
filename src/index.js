import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
