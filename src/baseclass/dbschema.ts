import { promises } from "fs";

const mongooses = require('mongoose');
let SchemaInBase = mongooses.Schema;
class dbBaseSchema {
        collection: string
        schema: any
        mongomodle: any
        constructor(collection: string, schema: any) {
            this.collection = collection;
            this.schema = schema;
            this.mongomodle = null
        }
        modelinit(): any {
            this.mongomodle = this.getmodel()
        }
        getmodel(): any {
            return mongooses.model(this.collection, this.setSchema(this.schema))
        }
        setSchema(schemajson: any): any {
            this.schema = schemajson;
            return new SchemaInBase(this.schema)
        }
        setCollection(collectionstr: string): string {
            this.collection = collectionstr;
            return this.collection
        }
        query(condition: any): any {  // 查询
            return new Promise((resolve, reject) => {
                this.mongomodle.find(condition, (err: any, res: any) => {
                    if(err) {
                        reject(err)
                    }
                    resolve(res)
                })
            })
        }
        save(saveinfo: any): any { // 保存
            let model = this.mongomodle;
            let saveresult = new model(saveinfo);
            return new Promise((resolve, reject) => {
                saveresult.save((err: any, res: any) => {
                    if(err) {
                        reject(err)
                    }
                    resolve(res)
                })
            })
        }
}

module.exports = dbBaseSchema;