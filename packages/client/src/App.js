import React, { useEffect } from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './components/Layout';
import useSocketIO from './hooks/useSocketIO';
import './App.css';

const App = () => {
  useSocketIO();
  return (
    <Router>
      <Layout />
      <ReactQueryDevtools instalIsOpen />
    </Router>        
  );
}

export { App as default };
