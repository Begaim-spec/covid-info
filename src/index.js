import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from "./redux/reducers/store";

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
   </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);


