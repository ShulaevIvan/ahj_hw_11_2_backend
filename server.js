const Koa = require('koa')
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const router = require('./router');

const app = new Koa();
const port = '7070';

app.use(koaBody({
    urlencoded:true,
    multipart: true
}));
app.use(cors())
app.use(router.allowedMethods());
app.use(router.routes());


app.listen(port, (ctx, next) => {
    console.log(`http://localost:${port}`);
});