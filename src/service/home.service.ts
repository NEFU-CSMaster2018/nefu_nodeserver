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
homecontrol.modelinit();

const homeServiceGet = homecontrol.query({});
//const homeServiceSave= homecontrol.save({});

module.exports = {
    homeServiceGet
   // homeServiceSave
}