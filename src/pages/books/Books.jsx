import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBookList from '../../components/ListedBooks/ListedBookList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    const [sortingType, setSortingType] = useState()
    // console.log(sortingType);
    const {storedBooks, wishlist} = useContext(BookContext)
    // console.log(storedBooks, wishlist, 'books');
    return (
        <div className='w-[90%] mx-auto mt-5'>
            <div className="flex justify-center mb-3">
                <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType('pages')}><a>Sort by pages</a></li>
    <li onClick={() => setSortingType('rating')} ><a>Sort by rating</a></li>
    <li onClick={() => setSortingType('year')} ><a>Sort by Publishing Year</a></li>
  </ul>
</div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read List: ({storedBooks.length})</Tab>
                    <Tab>Wish List: ({wishlist.length})</Tab>
                </TabList>

                <TabPanel>
                    <ListedBookList sortingType={sortingType} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType} />
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;