module.exports = {
    debug: process.env.DEBUG ? parseInt(process.env.DEBUG): 0,
    port: process.env.PORT ? parseInt(process.env.PORT): 3000,
    redisHost: process.env.REDIS_HOST || 'localhost'
}