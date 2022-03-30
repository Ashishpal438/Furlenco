import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataContextProvider} from './Contexts/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
    <App />
    </DataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
