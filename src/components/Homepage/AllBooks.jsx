import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';
import Book from '../UI/Book';

const booksPromise = fetch('/booksData.json').then(res => res.json())


const AllBooks = () => {
    const books = use(booksPromise)
    // console.log(books);
    return (
        <div className='my-12 container mx-auto'>
            <h2 className='fond-bold text-3xl text-center'>Books</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                books.map((book, index) => {
                    return <Book key={index} book={book}/>
                })
            }
            </div>
        </div>
    );
};

export default AllBooks;