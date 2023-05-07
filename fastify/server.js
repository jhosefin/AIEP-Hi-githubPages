// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
fastify.post('/registro', async (request, reply) => {
    //request.query - datos get
    const datos = request.body;
    return{datos};
  })
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 5500 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()