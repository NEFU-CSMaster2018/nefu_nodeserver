import * as Router from 'koa-router';
const router = new Router();
const homec = require('../controller/home.controller');

router.get('/', homec.home);
router.post('/edit', homec.edit);


module.exports = router.routes();