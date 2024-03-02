import { Provider } from 'react-redux';
import { store } from './rtk-query/store';
import ZodiosConsumer from './zodios';

function App() {
  return (
    <Provider store={store}>
      <ZodiosConsumer />
    </Provider>
  );
}

export default App;
