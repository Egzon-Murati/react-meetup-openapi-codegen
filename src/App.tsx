import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import SwrConsumer from './orval/swr';
import { store } from './rtk-query/store';
import ZodiosConsumer from './zodios';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ZodiosConsumer />
        <SwrConsumer />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
