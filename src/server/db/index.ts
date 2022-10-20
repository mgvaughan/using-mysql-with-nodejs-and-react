import * as mysql from 'mysql';
import config from '../config';

import Blogs from './Blogs';
import Authors from './Authors';
import BlogTags from './BlogTags';
import Tags from './Tags';

export const Connection = mysql.createConnection(config.mysql);

Connection.connect(err => {
    if(err) console.log(err);
});

export default {
    Blogs,
    Authors,
    BlogTags,
    Tags
}