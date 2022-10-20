import { Connection } from './index';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from Blogs', (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

export const one = async (id) => {
    return new Promise((resolve, reject) => {
        Connection.query('SELECT * from Blogs WHERE id = ?', [id], (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const add = async (title, content, authorid, name) => {
    return new Promise((resolve, reject) => {
        Connection.query('INSERT INTO Blogs (title, content, authorid) VALUES (?, ?, ?)', [title, content, authorid], (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
        Connection.query('INSERT INTO Tags VALUES ?', [name], (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};


export default {
    all,
    one,
    add
}