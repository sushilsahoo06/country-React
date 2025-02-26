import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Country from '../pages/Country.jsx'
import './index.css'
import App from './App';


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      { 
        path:"/Country",
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
