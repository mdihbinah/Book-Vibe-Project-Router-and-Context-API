import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../UI/Book';




const ListedWishList = ({sortingType}) => {
    const {wishlist} = useContext(BookContext)
    const [filteredWishList, setFilteredWishList] = useState(wishlist)

        useEffect(() => {
            if(sortingType){
                if(sortingType === 'pages'){
                    const sortedList = [...wishlist].sort((a,b) => a.totalPages - b.totalPages)
                    // console.log(sortedList);
                    setFilteredWishList(sortedList)
                } else if(sortingType === 'rating'){
                    const sortedList = [...wishlist].sort((a,b) => a.rating - b.rating)
                    // console.log(sortedList);
                    setFilteredWishList(sortedList)
                } else if(sortingType === 'year'){
                    const sortedList = [...wishlist].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
                    // console.log(sortedList);
                    setFilteredWishList(sortedList)
                }
            }
        }, [sortingType, wishlist])

    if(filteredWishList.length == 0){
        return <div className="h-[50vh] bg-gray-100 rounded-3xl flex justify-center items-center">
            <h1 className='font-bold text-3xl'>No Wish List Data Found</h1>
        </div>
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    filteredWishList.map(book => <Book book={book}></Book>)
}
        </div>
    );
};

export default ListedWishList;