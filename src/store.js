import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import { sagaWatcher } from 'containers/Forecast/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
))

sagaMiddleware.run(sagaWatcher);
