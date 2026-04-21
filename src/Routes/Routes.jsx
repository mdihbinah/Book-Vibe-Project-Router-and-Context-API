import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";
import PagestoRead from "../pages/books/PagestoRead/PagestoRead";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true, 
        element: <Homepage/> 
      },
      {
        path: '/books',
        Component: Books
      },
      {
        path: '/page-to-read',
        loader: () => fetch('/booksData.json'),
        Component: PagestoRead
      },
      {
        path: '/bookdetails/:bookId',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails
      }
    ],
    errorElement: <ErrorPage/>
  },
])