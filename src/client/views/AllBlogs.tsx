import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlogs } from '../../types';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState<IBlogs[]>([])
    const nav = useNavigate();

    useEffect(() => {
        fetch('/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="row justify-content-center">
            {blogs.map(blog => (
                <div onClick={() => nav(`/blogs/${blog.id}`)} key={`blog-card-${blog.id}`} className="col-7 my-2">
                    <div className="card bg-white shadow-lg">
                        <h1>{blog.title}</h1>
                        <h6>{blog.content}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default AllBlogs;