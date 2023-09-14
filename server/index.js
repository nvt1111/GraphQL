const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load schema & resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
})
