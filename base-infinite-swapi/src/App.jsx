import './App.css';

import { QueryClient, QueryClinetProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClinetProvider client={queryClient}>
      <div className='App'>
        <h1>Infinite SWAPI</h1>
        <ReactQueryDevtools />
      </div>
    </QueryClinetProvider>
  );
}

export default App;
