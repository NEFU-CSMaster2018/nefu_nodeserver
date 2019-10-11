import * as Router from 'koa-router';
const router = new Router();
const homecontroller = require('../controller/home.controller');

router.get('/', homecontroller.home);

router.get('/username/:username', homecontroller.username);


module.exports = router.routes();