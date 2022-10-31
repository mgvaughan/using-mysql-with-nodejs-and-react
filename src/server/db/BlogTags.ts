import { Query } from './index';
import { IBlogTags } from '../../types';

const allBlogTags = async () => Query<IBlogTags[]>('SELECT * FROM blogtags');

export default {
    allBlogTags
}