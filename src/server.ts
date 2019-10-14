import * as Koa from 'koa';
import * as Router from 'koa-router';
// import router modules
const home = require('./routes/home.routes');

const app = new Koa();
const router = new Router();

// db init
const dbinit = require('../build/dbconnect');
dbinit.dbconnect();

// default url
router.get('/', async (ctx) => {
    ctx.body = 'welcome to node server';
});

// router module homepage
router.use('/home', home);


// add router middleware
app.use(router.routes());
app.listen(3001);
console.log('server has started !!');