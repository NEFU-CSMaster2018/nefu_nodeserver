// const mongoose = require('mongoose');
// let Schema = mongoose.Schema;
// let BlockSchema = new Schema({
//    username: String,
//    age: String
//})
// let Block = mongoose.model('ylmongos', BlockSchema);
// let nameresult = new Block({username: 'yl5'});
// nameresult.save();
// Block.find({username: /^yl/},(res: any) => {console.log(res)})
const BaseSchema = require('../baseclass/dbschema');
let collectionStr = 'ylmongos';
let homeSchema = {
       username: String,
       age: String
}
class homeschema extends BaseSchema {
    constructor(collection: string, schema: any) {
        super(collection, schema);
    }
}
let homecontrol = new homeschema(collectionStr, homeSchema);
console.log(homecontrol)
const home = async (ctx: any) => {
    let result = await homecontrol.query({}, (res: any, err: any) => {
        console.log(res)
        console.log(err)
    });
    ctx.response.body = result;
}
const username =  async (ctx: any) => {
    let username = ctx.params.username;
    ctx.response.body = `<h1>hi ${username}</h1>`;
}
module.exports = {
    home,
    username
}