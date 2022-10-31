import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-danger">
            <Link className="btn btn-success m-2" to={"/"}>Home</Link>
            <Link className="btn btn-success m-2" to={"/create"}>Create A Blog</Link>
            <Link className="btn btn-success m-2" to={"/blogs"}>View All Blogs</Link>
        </div>
    )
};

export default Navbar