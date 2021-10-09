/** @format */
// avoid hoisting
'use strict';

// Dependences
require('dotenv').config();

// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-bodyParser');

// From other file
const { variables } = require('./variables/index');
const router = require('./routes');

// koa object
const app = new Koa();

// Bodyparser Middleware
app.use(bodyParser());

app.use(router.routes());

// Start server
app.listen(variables.appPort, () => {
  console.log(`API server listening on ${variables.host}:${variables.appPort}`);
});

// Exports app
module.exports = app;
