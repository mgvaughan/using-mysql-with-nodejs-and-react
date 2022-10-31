import * as mysql from 'mysql';

import Blogs from './Blogs';
import Authors from './Authors';
import Tags from './Tags';
import BlogTags from './BlogTags';

export const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'bloguser',
    password: 'blahblah',
    database: 'blogs'
});

export const Query = <ReceivedType = mysql.OkPacket>(query: string, values?: unknown[]) => {
    return new Promise<ReceivedType>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if(err) return reject(err);
            return resolve(results)
        });
    });
};

export default {
    Blogs,
    Authors,
    Tags,
    BlogTags
}