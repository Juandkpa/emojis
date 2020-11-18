import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Catalog from './components/Catalog';
import './App.css';


const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2
    },
  },
});

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <h2>Github Emojis</h2>
      <Catalog />
      <ReactQueryDevtools instalIsOpen />
    </ReactQueryCacheProvider>
  )
}

export { App as default };