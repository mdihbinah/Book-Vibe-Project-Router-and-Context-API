import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../UI/Book';

const ListedWishList = () => {
    const {storedBooks, handleMarkAsRead, wishlist} = useContext(BookContext)
        console.log(storedBooks, wishlist, 'books');
    return (
        <div grid md:grid-cols-2 lg:grid-cols-3 gap-5>
{
    storedBooks.map(book => <Book book={book}></Book>)
}
        </div>
    );
};

export default ListedWishList;