import { createStore } from 'redux';
import textReducer from '../reducers/textReducer';

const store = createStore(textReducer);

export default store;