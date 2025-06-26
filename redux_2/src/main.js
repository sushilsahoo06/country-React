import { createRoot } from 'react-dom/client'; 
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from '../store';
import App from './app';   
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/cart',
          element: <Cart />
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true
    }
  }
);

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
