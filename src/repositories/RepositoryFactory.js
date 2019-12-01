import PostRepository from './PostRepository';
import UserRepository from './UserRepository';

const repositories = {
    'posts': PostRepository,
    'users': UserRepository
}
export default {
    get: name => repositories[name]
};