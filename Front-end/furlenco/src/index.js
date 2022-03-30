import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DataContextProvider} from './Contexts/DataContext';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DataContextProvider>
    <App />
    </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
