import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { validateFields, validateForm } from './middlewares';

const store = createStore(
  reducers,
  applyMiddleware(validateFields, validateForm)
);

export default store;
