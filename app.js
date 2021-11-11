const app = require('express')();
const { port, debug, redisHost, mongoHost } = require('./config');
const redis = require('redis');
const { MongoClient } = require('mongodb');
const mongoUrl = `mongodb://${mongoHost}:27017`;

const mongoClient = new MongoClient(mongoUrl);

const dbName = 'learn-docker';

const client = redis.createClient({
    host: redisHost
});

console.log(process.env.NODE_VERSION);

app.get('/', (req, res) => {
    if (debug) {
        console.log(req.headers)
    }
    client.get('count', (err, reply) => {
        const count = reply ? parseInt(reply) + 1: 1
        res.json(`Docker is easy! 🐳 times ${count}`)
        client.set('count', count);

        const db = mongoClient.db(dbName);
        const collection = db.collection('documents');

        collection.insertOne({
            tries: count,
            time: new Date().toISOString()
        })
    })
})

app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
    await mongoClient.connect();
})