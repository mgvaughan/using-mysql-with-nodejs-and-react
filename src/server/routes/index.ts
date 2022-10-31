import * as express from 'express';
import blogsRouter from './Blogs';
import authorsRouter from './Authors';
import blogTagsRouter from './BlogTags';
import tagsRouter from './Tags';

const router = express.Router();

router.use('/api/blogs', blogsRouter);
router.use('/api/authors', authorsRouter);
router.use('/api/blogtags', blogTagsRouter);
router.use('/api/tags', tagsRouter);

export default router;