import { createStore, combineReducers } from 'redux';

import questions from './Questions/reducer';
import user from './Users/reducer';

const rootReducer = combineReducers({
    questions,
    user
});

const store = createStore(rootReducer);

export default store;
