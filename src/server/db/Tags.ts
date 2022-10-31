import { Query } from './index';
import { ITags } from '../../types';

const allTags = async () => Query<ITags>('SELECT * FROM tags');

export default {
    allTags
}