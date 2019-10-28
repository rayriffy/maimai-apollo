/* Apollo */
import { MemcachedCache } from 'apollo-server-cache-memcached'
import { ApolloServer } from 'apollo-server-express'

/* Server */
import cors from 'cors'
import express from 'express'

/* Apollo config */
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/schema'

import MaimaiAPI from './graphql/data/maimai'

const server = express()
const {ENGINE_KEY} = process.env

/**
 * Summon Apollo GraphQL
 */
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    MaimaiAPI: new MaimaiAPI(),
  }),
  persistedQueries: {
    cache: new MemcachedCache(
      ['memcached-server-1', 'memcached-server-2', 'memcached-server-3'],
      { retries: 10, retry: 10000 }
    ),
  },
  engine: {
    apiKey: ENGINE_KEY,
  },
  introspection: true,
  playground: true,
  tracing: true,
  cacheControl: true,
})

/**
 * Server initialization
 */

server.use(cors())

apollo.applyMiddleware({
  app: server,
  path: '/',
  cors: false,
})

server.listen(4000)

export default server
