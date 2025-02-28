import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App';
import Home from '../comonents/Home.jsx';
import { CountrtDetails } from '../comonents/CountrtDetails.jsx';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      { 
        path:"/",
        element:<Home/>
      },
      {
        path:'/:country',
        element:<CountrtDetails/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
