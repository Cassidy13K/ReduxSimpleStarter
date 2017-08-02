import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react"

import stores from "./stores"
import App from './components/app';

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.querySelector('.container'));
