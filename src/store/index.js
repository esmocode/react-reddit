import thunk from 'redux-thunk';
import reducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";

//Use redux thunk as middleware for async reqs -----
const middleware = [thunk];

//Initial state ------
const initState = {
	post: {},
	comments: []
};

const store = createStore(reducers, initState,
		applyMiddleware(...middleware),
);

export default store;