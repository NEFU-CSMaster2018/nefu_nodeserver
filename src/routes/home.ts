import * as Router from 'koa-router';
const router = new Router();
const homec = require('../controller/home.controller');

router.get('/', homec.home);
router.get('/:username', homec.username);


module.exports = router.routes();