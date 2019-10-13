const mongooses = require('mongoose');
let SchemaInBase = mongooses.Schema;
class dbBaseSchema {
        collection: string
        schema: any
        constructor(collection: string, schema: any) {
            this.collection = collection;
            this.schema = schema;
        }
        getSchema(schemajson: any): any {
            this.schema = schemajson;
            return new SchemaInBase(this.schema)
        }
        getCollection(collectionstr: string): string {
            this.collection = collectionstr;
            return this.collection
        }
        getmodel(): any {
            return mongooses.model(this.collection, this.getSchema(this.schema))
        }
        query(condition: any, call: any): any {
            return this.getmodel().find(condition, call)
        }
}

module.exports = dbBaseSchema;