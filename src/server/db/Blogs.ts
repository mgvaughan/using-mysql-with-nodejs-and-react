import { Query } from './index';
import { IBlogs } from '../../types';

const allBlogs = async () => Query<IBlogs[]>('SELECT * FROM blogs');
const oneBlog = async (id: number) => Query<IBlogs[]>('SELECT * FROM blogs WHERE id = ?', [id]);
const createBlog = async (newBlog: IBlogs) => Query(`INSERT INTO blogs SET ?`, [newBlog]);
const updateBlog = async (updateableBlog: IBlogs, id: number) => Query(`UPDATE blogs SET ? WHERE id = ?`, [updateableBlog, id]);
const deleteBlog = async (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default{
    allBlogs,
    oneBlog,
    createBlog,
    updateBlog,
    deleteBlog
}