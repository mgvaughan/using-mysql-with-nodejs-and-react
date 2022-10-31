import * as express from 'express';
import db from '../db';

// Current route begins with /api/tags
const tagsRouter = express.Router();


tagsRouter.get('/', async (req, res) => {
    try {
        const tags = await db.Tags.allTags();
        res.json(tags);
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: "Could not get all tags, please check server logs" });
    }
});

export default tagsRouter;