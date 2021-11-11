const app = require('express')();
const { port, debug, redisHost } = require('./config');
const redis = require('redis');
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
    })
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}/`)
})