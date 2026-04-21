

const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList")
    // console.log(allReadList, 'ReadList from local DB')
    if(allReadList) return JSON.parse(allReadList)
    return []
    
}

const addReadListToLocalDB = (book) =>{
    const allBooks = getAllReadListFromLocalDB()
    const isAlreadyExist = allBooks.find(bk => bk.bookId == book.bookId)

    if(!isAlreadyExist){
        allBooks.push(book)
        localStorage.setItem('readList', JSON.stringify(allBooks))
    }
}


const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList")
    // console.log(allWishList, 'WishList from local DB')
    if(allWishList) return JSON.parse(allWishList)
    return []
    
}

const addWishListToLocalDB = (book) =>{
    const wishBooks = getAllReadListFromLocalDB()
    const isAlreadyExist = wishBooks.find(bk => bk.bookId == book.bookId)

    if(!isAlreadyExist){
        wishBooks.push(book)
        localStorage.setItem('wishList', JSON.stringify(wishBooks))
    }
}

export {
getAllReadListFromLocalDB, 
addReadListToLocalDB, 
getAllWishListFromLocalDB,
addWishListToLocalDB
}