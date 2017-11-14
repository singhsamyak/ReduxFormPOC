import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Page from './containers/Page';
import store from './store';
import '../scss/styles.scss'

const mount = document.getElementById('mount');
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Page />
    </Provider>,
    mount
  );
}

render();
store.subscribe(render);
