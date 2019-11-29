import { combineReducers } from 'redux';
import postReducer from './postReducer'
import commentsReducer from './commentReducer';

const reducers = combineReducers({
	post: postReducer,
	comments: commentsReducer
});

export default reducers;