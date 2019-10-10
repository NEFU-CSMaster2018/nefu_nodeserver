import * as Koa from 'koa';
import * as Router from 'koa-router';
// import router modules
const home = require('./routes/home');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'hello';
});

// router modules use
router.use('/home', home);



// add router middleware
app.use(router.routes());
app.listen(3001);
console.log('server has started !!');