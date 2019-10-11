const mongoose = require('mongoose');
// const MONGODB_URL = 'http://106.13.81.162:27017/';
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://admin:1qaz!QAZ@106.13.81.162:27017/admin', {useNewUrlParser: true});

//
let Schema = mongoose.Schema;
let BlockSchema = new Schema({
    peer: String,
    blocks: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
})
let Block = mongoose.model('Block', BlockSchema);

module.exports = {
    home: async (ctx: any) => {
        let result = await Block.find();
        ctx.response.body = `<div>${result}12344</div>`
    },
    username: async (ctx: any) => {
        let username = ctx.params.username;
        ctx.response.body = `<h1>hi ${username}</h1>`;
    }
}