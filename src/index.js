// bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store.js'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(<Provider store={ store }>
                <Router>
                <App />
                </Router>
                </Provider>, document.getElementById('root')
              );
