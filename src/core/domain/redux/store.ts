import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
let storeEnhancer = applyMiddleware(sagaMiddleware);
if (__DEV__) {
  storeEnhancer = composeWithDevTools(storeEnhancer);
}
const store = createStore(rootReducer, storeEnhancer);
sagaMiddleware.run(rootSaga);

export type StoreState = ReturnType<typeof store.getState>;

export default store;
