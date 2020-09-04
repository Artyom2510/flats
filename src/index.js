import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/redusers';
import App from './components/App';

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware)
	)
)

ReactDOM.render(
	<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);