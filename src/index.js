import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './redux/reducers'
import { Provider } from 'react-redux';

const store = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
