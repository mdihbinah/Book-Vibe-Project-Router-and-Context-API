import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBookList from '../../components/ListedBooks/ListedBookList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const Books = () => {
    const {storedBooks, handleMarkAsRead, wishlist} = useContext(BookContext)
    console.log(storedBooks, wishlist, 'books');
    return (
        <div>
            <div className=""></div>
            <div className=""></div>
            <Tabs>
                <TabList>
                    <Tab>Read List: ({storedBooks.length})</Tab>
                    <Tab>Wish List: ({wishlist.length})</Tab>
                </TabList>

                <TabPanel>
                    <ListedBookList/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList/>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Books;