const homeservice = require('../service/home.service');

const home = async (ctx: any) => {
    let result = await homeservice.homeServiceGet;
    ctx.response.body = result;
}
const edit =  async (ctx: any) => {
    let edits = JSON.stringify(ctx.request);
    console.log(edits)
    ctx.response.body = `<h1>hi ${edits}</h1>`;
}



module.exports = {
    home,
    edit
}