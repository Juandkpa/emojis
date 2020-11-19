import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './components/Layout';
import './App.css';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: Infinity
    },
  },
});

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Router>
      <Layout />
      <ReactQueryDevtools instalIsOpen />
    </Router>      
  </ReactQueryCacheProvider>
);

export { App as default };
