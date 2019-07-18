import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './Containers/App';
import reducers from './Reducers';

const store = createStore(reducers , applyMiddleware(thunk))

ReactDOM.render(
    <div>
    <Provider store = {store}>
        <App />
    </Provider>
</div>,document.querySelector('#root'))