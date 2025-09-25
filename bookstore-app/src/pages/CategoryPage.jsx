import React from "react";
import {Link} from "react-router-dom";



const CategoryPage = () => {
    return(
        <div>
            <h1>Welcome to the Category</h1>
            <p>This is the  about of the bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    )
}

export default CategoryPage;