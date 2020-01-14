import { createStore,applyMiddleware } from "redux"
import thunk from 'redux-thunk';
// import todoReducer from './reducer/index';
import reducer from './reducer';

const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
);

export default store;
