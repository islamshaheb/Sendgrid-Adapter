/** @format */

const Router = require('koa-router');

const { send } = require('./controllers/emails');
const routers = new Router();

routers.post('/email', send);
module.exports = routers;
