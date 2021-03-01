import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import './styles/variables.css';

import Header from './components/Header';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
