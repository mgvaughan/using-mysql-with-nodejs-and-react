import * as express from 'express';

import DB from './db'

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        let blogs = await DB.Blogs.all();
        res.json(blogs);   
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/:id', async (req, res) => {
    try {
        res.json((await DB.Blogs.one(req.params.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/blogs', async (req, res) => {
    try {
        res.json((await DB.Blogs.add()))
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/api/authors', async (req, res) => {
    try {
        let authors = await DB.Authors.all();
        res.json(authors);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/tags', async (req, res) => {
    try {
        let tags = await DB.Tags.all();
        res.json(tags);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogtags', async (req, res) => {
    try {
        let blogTags = await DB.BlogTags.all();
        res.json(blogTags);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;