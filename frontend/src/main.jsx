import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
import SendMoney from './pages/SendMoney.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'

const router=createBrowserRouter([
  {path:"/signin",element:<Signin/>},
  {path:"/signup",element:<Signup/>},
  {path:"/dashboard",element:<Dashboard/>},
  {path:"/send",element:<SendMoney/>}
])

createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <RouterProvider router={router}/>
//  </StrictMode>,
)
