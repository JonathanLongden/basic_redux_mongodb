import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();

