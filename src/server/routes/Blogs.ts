import * as express from 'express';
import db from '../db';

// Current route begins with /api/blogs
const blogsRouter = express.Router();

blogsRouter.get('/', async (req, res) => {
    try {
        const blogs = await db.Blogs.allBlogs();
        res.json(blogs);   
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not get all blogs, please check server logs" });
    }
});

blogsRouter.get('/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        const [blog] = await db.Blogs.oneBlog(id);
        res.json(blog);
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not get one blog, please check server logs" });
    }
});

blogsRouter.put('/:id', async (req, res) => {
    let id = Number(req.params.id)

    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ message: "Please ensure you send an update with both title and content" });
        return;
    }
    try {
        const updateableBlog = { title, content };
        await db.Blogs.updateBlog(updateableBlog, id);
        res.status(201).json({ message: "Successfully updated blog!" })
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not update blog, please check server logs"});
    }
});

blogsRouter.post('/', async (req, res) => {

    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ message: "Please ensure you create a blog with both title and content" });
        return;
    }
    try {
        const newBlog = { title, content, authorid: 1 };
        const results = await db.Blogs.createBlog(newBlog);
        res.status(201).json({ message: "Successfully created blog!", id: results.insertId })
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not create blog, please check server logs"});
    }
});

blogsRouter.delete('/:id', async (req, res) => {
    let id = Number(req.params.id)
    try {
        await db.Blogs.deleteBlog(id)
        res.status(200).json({ message: "Successfully deleted blog!" });
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not delete blog, please check server logs"});
    }
})




export default blogsRouter;
