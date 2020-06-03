import React from 'react';
import ReactDOM from 'react-dom';

import initStore from './stores/Stores';

import Products from './pages/Products/Products';
import './styles/app.scss';

const store = initStore();

ReactDOM.render(
    <React.StrictMode>
        <Products checkoutStore={store.checkoutStore} />
    </React.StrictMode>,
    document.getElementById('root')
);
