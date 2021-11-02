const { GraphQLServer, PubSub } = require('graphql-yoga')
const typeDefs = require('./schema')
const resolvers = require('./resolver')

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

server.start({ port: 4567 }, () => console.log('Graphql Server is running on localhost:4567'))
