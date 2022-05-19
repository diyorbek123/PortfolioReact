import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


