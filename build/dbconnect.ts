const mongoos = require('mongoose');
const { DB_URL } = require('../config/dev.config');
const dbconnect = function() {
    mongoos.connect(DB_URL + 'admin');
    mongoos.connection.on('connected', () => {
        console.log('mongodb has connected')
    })
    mongoos.connection.on('disconnected', () => {
        console.log('mongodb disconnected')
    })
    mongoos.connection.on('error', (err: any) => {
        console.log('mongodb has error' + err);
    })
}

module.exports = {
    dbconnect
}