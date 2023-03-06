import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactReduxFirebaseProvider {...rrfProps} >
          <App />
        </ReactReduxFirebaseProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);