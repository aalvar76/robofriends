import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

//create store here
//parameter: our reducer
//in real live apps we have many many reducers
//combine all reducers in one big REDUCER
//rootReducer
const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// wrape the app between Provider component
ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));
registerServiceWorker();
