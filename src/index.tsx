import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GlobalStyle} from './Component/GlobalStyle/index'
import { Context} from './Component/useContext/Context'
import {store} from './Component/Redux/store'
import {Provider} from 'react-redux'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    < Context>
    <GlobalStyle>
   <App />
   </GlobalStyle>
    </Context>
    </Provider>
   
  
  </React.StrictMode>
);



