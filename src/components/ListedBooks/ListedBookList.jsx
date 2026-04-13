import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../UI/Book';

const ListedBookList = () => {
    const {storedBooks, handleMarkAsRead, wishlist} = useContext(BookContext)
    console.log(storedBooks, wishlist, 'books');
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    wishlist.map(book => <Book book={book}></Book>)
}
        </div>
    );
};

export default ListedBookList;