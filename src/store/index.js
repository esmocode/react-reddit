import thunk from 'redux-thunk';
import reducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

//Use redux thunk as middleware for async reqs -----
const middleware = [thunk];

//Initial state ------
const initState = {
	post: {},
	comments: []
};

const store = createStore(reducers, initState,
	composeEnhancers(applyMiddleware(...middleware)),
);

export default store;