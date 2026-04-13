import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({book}) => {
    return (
        <div>
            <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={book.image} className='p-3 m-2 bg-gray-100 rounded-xl w-[50%] max-h-50' />
  </figure>
  <div className="card-body">
    <div className="flex items-center gap-2">
        {book.tags.map(tag =>
            <div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>
        )}
    </div>
      
        <h2 className='card-title font-bold text-xl'>{book.bookName}</h2>
      <p className='font-semibold text-lg'>By: {book.author}</p>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between border-t border-dashed pt-1 text-xl">
      <div className="badge badge-outline">{book.category}</div>
      <div className="badge badge-outline flex items-center">{book.rating}<CiStar/></div>
    </div>
  </div>
</Link>
        </div>
    );
};

export default Book;