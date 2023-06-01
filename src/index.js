/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.scss';
import { Provider } from 'react-redux';
import Root from './components/containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

registerServiceWorker();
