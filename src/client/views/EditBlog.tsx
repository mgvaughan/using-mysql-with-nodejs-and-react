import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IBlogs } from '../../types';

const EditBlog = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const { id } = useParams();

    useEffect(() => {
        fetch(`/api/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setContent(data.content);
            })
            .catch(error => console.error(error))
    }, [id]);

    const nav = useNavigate();

    const handleUpdateButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!title || !content) return alert('Fill everything out.');

        fetch(`/api/blogs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        })
            .then(res => res.json())
            .then(data => {
                nav(`/blogs/${id}`);
            })
            .catch(error => console.error(error));
    };

    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!title || !content) return alert('Fill everything out.')

        fetch(`/api/blogs/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                nav("/blogs");
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="row justify-content-center h-100 align-items-center">
            <div className="col-12 col-md-7">
                <form action="" className="p-3 bg-white shadow-lg">
                    <h1 className="text-center">Editing Blog #{id}</h1>
                    <label>Book Title</label>
                    <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} type="text" />
                    <label>Story Bio</label>
                    <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} cols={30} rows={5} />

                    <button onClick={handleUpdateButton} className="btn btn-warning m-2">Update Blog</button>

                    <button onClick={handleDeleteButton} className="btn btn-danger m-2">DELETE</button>
                </form>
            </div>



        </div>
    )

}

export default EditBlog;