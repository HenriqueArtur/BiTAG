import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './styles/variables.css';

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </>
  );
}

export default App;
