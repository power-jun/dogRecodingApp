
// import koa from 'koa'; 现在暂未支持，只能使用require module.exports
const koa = require('koa');
const mongo = require('koa-mongo');
const logger = require('koa-logger');
const session = require('koa-session');
const bodyparser = require('koa-bodyparser');

const config = require('./config/config');
const route = require('./config/routes');

const app = new koa();

app.use(mongo(config.mongodb));
app.use(route.routes())
   .use(route.allowedMethods());

// app.use(async (ctx) => {
//   ctx.body = await ctx.mongo.db('dogRecordApp').collection('login').find().toArray();
// });

app.listen(3000);
