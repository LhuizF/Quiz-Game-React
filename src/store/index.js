import { createStore, combineReducers } from 'redux';

import user from './User/reducer';
import question from './Question/reducer';

const rootReducer = combineReducers({
    user,
    question
});

const store = createStore(rootReducer);

export default store;
