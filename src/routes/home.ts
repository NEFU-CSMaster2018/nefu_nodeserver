import * as Router from 'koa-router';
const router = new Router();
const homecontroller = require('../controller/home.controller');

router.get('/username/:username', homecontroller.username);

router.get('/login/:test', async (ctx) => {
    let test = ctx.params.test;
    ctx.response.body = `<h1>test ${test}</h1>`;
});

module.exports = router.routes();