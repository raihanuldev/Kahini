import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './Pages/Home/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
