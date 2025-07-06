import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { Counter } from './components/Counter'
import { store } from './apps/Store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter />
  </Provider>,
);