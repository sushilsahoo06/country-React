import { createRoot } from 'react-dom/client'; 
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import App from './app';                  

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>
);
