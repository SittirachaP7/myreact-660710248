import React from "react";
import {Link} from "react-router-dom";



const BookDetailPage = () => {
    return(
        <div>
            <h1>Welcome to the Books</h1>
            <p>This is the  Books of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    )
}

export default BookDetailPage;