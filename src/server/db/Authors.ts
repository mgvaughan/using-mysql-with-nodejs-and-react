import { Query } from './index';
import { IAuthors } from '../../types';

const allAuthors = async () => Query<IAuthors[]>('SELECT * From authors');

export default {
    allAuthors
}