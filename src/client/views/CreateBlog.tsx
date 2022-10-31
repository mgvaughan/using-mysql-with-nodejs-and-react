import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const nav = useNavigate();

    const handleSubmitButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!title || !content) return alert('fill out blog post');

        fetch('/api/blogs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content })
        })
        .then(res => res.json())
        .then(data => {
            if (data.id) {
                nav(`/blogs/${data.id}`);
            }
        })
        .catch(error => console.error(error));
    }

    return (
        <div className="row justify-content-center h-100 align-items-center">
            <div className="col-12 col-md-7">
                <form action="" className="p-3 bg-white shadow-lg">
                    <label>Book Title</label>
                    <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} type="text" />
                    <label>Story Bio</label>
                    <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} cols={30} rows={5} />

                    <button onClick={handleSubmitButton} className="btn btn-sucess m-2">Submit New Blog</button>
                </form>
            </div>
        </div>
    )
}

export default CreateBlog
