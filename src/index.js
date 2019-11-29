import React from 'react';
import en from 'javascript-time-ago/locale/en'
import JavascriptTimeAgo from 'javascript-time-ago'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
JavascriptTimeAgo.locale(en)

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>
	, document.getElementById('root'));
serviceWorker.unregister();
