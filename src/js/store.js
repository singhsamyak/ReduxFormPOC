import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import rootSaga from './sagas';
import { appMiddleware } from './middlewares';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(appMiddleware, sagaMiddleware)
);
sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
