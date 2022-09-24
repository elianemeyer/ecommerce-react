import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import 'bootstrap/dist/css/bootstrap.css';
//import * as bootstrap from 'bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

library.add(faCartShopping);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);