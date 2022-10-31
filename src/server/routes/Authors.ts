import * as express from 'express';
import db from '../db';

// Current route begins with /api/authors
const authorsRouter = express.Router();

authorsRouter.get('/', async (req, res) => {
    try {
        const authors = await db.Authors.allAuthors();
        res.json(authors);
    } catch(e) {
        console.log(e);
        res.status(500).json({ message: 'Could not get all authors, please check server logs' });
    }
});

export default authorsRouter;
