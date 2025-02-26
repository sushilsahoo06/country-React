import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from '../pages/Country.jsx'

import './index.css'
import App from './App';
import Home from '../comonents/Home.jsx';


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
        path:'/Contact',
        element:<Country/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
