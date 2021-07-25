import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import style from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}> 
      <PersistGate loading={null} persistor={store.persistor}> 
         <BrowserRouter>
          <App className={style} />
        </BrowserRouter> 
      </PersistGate> 
     </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);