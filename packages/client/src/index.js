import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';

const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      staleTime: Infinity
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <App />
      </ReactQueryCacheProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
