const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
    mongo = await MongoMemoryServer.create(); 
    const mongoDBURL = mongo.getUri();
    connection = await MongoClient.connect(mongoDBURL); 
    database = connection.db();
}

async function getDatabase() {
    if(!database) startDatabase();
    return database;
}

module.exports = {
    getDatabase,
    startDatabase
};