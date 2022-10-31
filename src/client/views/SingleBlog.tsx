import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlogs } from '../../types';
import { useParams, Link } from 'react-router-dom';

const SingleBlog = () => {
    const [blog, setBlog] = useState<IBlogs>()
    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(error => console.error(error))
    }, [id]);

    return (
        <div className="row justify-content-center">
            <div className="col-7 my-2">
                <div className="card bg-white shadow-lg">
                    <h1>{blog?.title}</h1>
                    <h6>{blog?.content}</h6>
                    <Link className="btn btn-primary" to={`/blogs/${id}/edit`}>Edit Me</Link>
                </div>
            </div>
        </div>
    )
};

export default SingleBlog;