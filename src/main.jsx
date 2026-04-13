import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/homepage/Homepage'
import Books from './pages/books/Books'
import { router } from './Routes/Routes'
import BookProvider from './context/BookProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
