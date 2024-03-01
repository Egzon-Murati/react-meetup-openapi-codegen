import { Provider } from 'react-redux';
import { store } from './rtk-query/store';

function App() {
  return <Provider store={store}>test</Provider>;
}

export default App;
