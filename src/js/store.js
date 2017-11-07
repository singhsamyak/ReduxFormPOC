import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { appMiddleware } from './middlewares';

const store = createStore(
  reducers,
  applyMiddleware(appMiddleware)
);

export default store;
