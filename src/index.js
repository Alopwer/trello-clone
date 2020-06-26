import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './store';
import { Provider } from 'react-redux';
import  { BrowserRouter as Router } from 'react-router-dom';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import rrfProps from './config/rrfConfig';

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <Router>
                <App />
            </Router>
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
