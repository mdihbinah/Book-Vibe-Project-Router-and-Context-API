import React, {  useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';

// const booksPromise = fetch('/booksData.json').then(res => res.json())

const BookDetails = () => {
    // const books = use(booksPromise)
    const {bookId:bookParamsId} = useParams()
    // console.log(bookParamsId);
    const books = useLoaderData()
    // console.log(books, 'loader data');
    const expectedBook = books.find(book => book.bookId == bookParamsId)
    // console.log(expectedBook, 'find book');
    const {bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing} = expectedBook
    
    const { handleMarkAsRead, handleWishList} = useContext(BookContext)
    // console.log(storedBooks, handleMarkAsRead);
    
    

    return (
        <div>
            <div className="flex flex-col justify-center items-center md:grid grid-cols-6 bg-base-100 shadow-sm container mt-5 mx-auto ">
  <figure className='col-span-2'>
    <img
      src={image} className='p-5 rounded-lg bg-gray-100 w-full h-100 md:w-auto ' />
  </figure>
  <div className="card-body col-span-4">
    <h2 className="card-title">{bookName}</h2>
    <h2 className="card-title">By: {author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p className=''><span className='font-bold'>Review : </span> {review}</p>
    <div className="flex gap-2">
        <span>Tag:</span>
        {expectedBook.tags.map((tag, index) =>
            <div key={index} className="badge text-green-500 bg-green-100 font-bold">#{tag}</div>
    )}
    </div>
    <div className="border-t flex flex-col gap-3">
        <div className="flex justify-between items-center gap-2">
            <span>Number of Pages:</span> <span className='font-bold'>{totalPages}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
            <span>Publisher:</span> <span className='font-bold'>{publisher}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
            <span>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span>
        </div>
        <div className="flex justify-between items-center gap-2">
            <span>Rating:</span> <span className='font-bold'>{rating}</span>
        </div>
      
      <div className="flex items-center gap-2">
        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
        <button onClick={() => handleWishList(expectedBook)} className="btn btn-primary">Add to Wishlist</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;