const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
let clientPromise = global._mongoClientPromise;

if (!clientPromise) {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
    global._mongoClientPromise = clientPromise;   // survives warm invocations
}

async function getDatabase() {
    const client = await clientPromise;
    return client.db();   // uses the db name from the URI, or pass one: client.db('mydb')
}

module.exports = { getDatabase };