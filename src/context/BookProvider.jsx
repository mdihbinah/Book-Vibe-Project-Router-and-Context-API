import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({children}) => {

    const [storedBooks, setStoredBooks] = useState([])
    const [wishlist, setWishlist] = useState([])


    const handleMarkAsRead = (currentBook) => {
        console.log(currentBook);

        const isExistBook = storedBooks.find(book => book.bookId == currentBook.bookId)
        if(isExistBook){
            toast.error('The book is already exist.')
        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to read list.`)
        }
    }
    const handleWishList = (currentBook) => {
        console.log(currentBook);

        const isExistReadList = storedBooks.find(book => book.bookId == currentBook.bookId)

        if(isExistReadList){
            toast.error('This book is already in read list.')
            return
        }

        const isExistBook = wishlist.find(book => book.bookId == currentBook.bookId)
        if(isExistBook){
            toast.error('The book is already exist.')
        } else {
            setWishlist([...wishlist, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list.`)
        }
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishlist,
        setWishlist,
        handleWishList
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;