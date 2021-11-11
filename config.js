module.exports = {
    debug: process.env.DEBUG || 0,
    port: process.env.PORT || 3000,
    redisHost: process.env.REDIS_IP || 'localhost'
}