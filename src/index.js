import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <header >
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </header>, document.getElementById('root'));
registerServiceWorker();
