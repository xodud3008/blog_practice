import Router from 'koa-router';
import posts from "./posts";
import auth from './auth';

const api = new Router();

api.use('/post', posts.routes());
api.use('/auth', auth.routes());

export default api;