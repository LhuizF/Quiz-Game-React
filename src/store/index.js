import { createStore, combineReducers } from 'redux';

import questions from './Questions/reducer';

const rootReducer = combineReducers({
    questions
});

const store = createStore(rootReducer);

export default store;
