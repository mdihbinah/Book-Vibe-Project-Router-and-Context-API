import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import Book from '../UI/Book';

const ListedBookList = ({sortingType}) => {
    const {storedBooks} = useContext(BookContext)
    const [filteredReadList, setFilteredReadList] = useState(storedBooks)
    useEffect(() => {
        if(sortingType){
            if(sortingType === 'pages'){
                const sortedList = [...storedBooks].sort((a,b) => a.totalPages - b.totalPages)
                // console.log(sortedList);
                setFilteredReadList(sortedList)
            } else if(sortingType === 'rating'){
                const sortedList = [...storedBooks].sort((a,b) => a.rating - b.rating)
                // console.log(sortedList);
                setFilteredReadList(sortedList)
            } else if(sortingType === 'year'){
                const sortedList = [...storedBooks].sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
                // console.log(sortedList);
                setFilteredReadList(sortedList)
            }
        }
    }, [sortingType, storedBooks])

    if(filteredReadList.length == 0){
        return <div className="h-[50vh] bg-gray-100 rounded-2xl flex justify-center items-center">
            <h1 className='font-bold text-3xl'>No Read List Data Found</h1>
        </div>
    }
    
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
{
    filteredReadList.map(book => <Book book={book}></Book>)
}
        </div>
    );
};

export default ListedBookList;