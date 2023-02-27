const Router = require('koa-router');
const api = require('../api/index');

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.response.body = 'server-start';
    ctx.response.status = 200;
});

router.get('/posts/', async (ctx, next) => {
    ctx.response.body = await api.getPosts();
    ctx.response.status = 200;
});

router.get('/posts/lastest', async (ctx, next) => {
    ctx.response.body = await api.getPostsLastest();
    ctx.response.status = 200;
});

router.get('/posts/:id', async (ctx, next) => {
    const { id } = ctx.params;
    ctx.response.body = await api.getPostsById(id);
    ctx.response.status = 200;
});

router.get('/posts/:id/comments', async (ctx, next) => {
    const { id } = ctx.params;
    ctx.response.body = await api.getPostCommentById(id);
    ctx.response.status = 200;
});

router.get('/posts/:id/comments/lastest', async (ctx, next) => {
    const { id } = ctx.params;
    ctx.response.body = await api.getCommentsLastest(id);
    ctx.response.status = 200;
});




module.exports = router;

