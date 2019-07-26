const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  let s = ctx.query['echostr'];
  ctx.body = s;
});

app.listen(9900);