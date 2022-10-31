import * as express from 'express';
import db from '../db';

// Current route begins with /api/blogtags
const blogTagsRouter = express.Router();


blogTagsRouter.get('/', async (req, res) => {
    try {
        const blogTags = await db.BlogTags.allBlogTags();
        res.json(blogTags);
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not get all blog tags, please check server logs" });
    }
});

export default blogTagsRouter;
